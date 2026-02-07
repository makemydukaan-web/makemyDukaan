#!/usr/bin/env python3
import requests
import json
import sys
from datetime import datetime

class LocalAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.issues = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        default_headers = {'Content-Type': 'application/json'}
        if headers:
            default_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=default_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=default_headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                    return True, response_data
                except:
                    print(f"   Response (text): {response.text[:100]}...")
                    return True, response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   Error: {json.dumps(error_data, indent=2)}")
                except:
                    print(f"   Error (text): {response.text}")
                
                issue = {
                    "endpoint": endpoint,
                    "issue": f"Status {response.status_code} instead of {expected_status}",
                    "impact": "API functionality broken",
                    "fix_priority": "HIGH"
                }
                self.issues.append(issue)
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            issue = {
                "endpoint": endpoint,
                "issue": f"Request failed: {str(e)}",
                "impact": "Cannot reach endpoint",
                "fix_priority": "CRITICAL"
            }
            self.issues.append(issue)
            return False, {}

def main():
    print("🚀 Testing Local Backend API (Localhost:8001)")
    print("="*60)
    
    tester = LocalAPITester()
    
    # Test health check
    success, response = tester.run_test(
        "Health Check",
        "GET",
        "api/health",
        200
    )
    
    # Test contact form
    test_contact_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "phone": "+91 98765 43210",
        "business_type": "Retail / Shop",
        "budget": "₹15,000 - ₹25,000",
        "message": "Test message"
    }
    
    success2, response2 = tester.run_test(
        "Contact Form Submission",
        "POST",
        "api/contact",
        200,
        data=test_contact_data
    )
    
    # Test newsletter
    newsletter_data = {"email": "test@example.com"}
    
    success3, response3 = tester.run_test(
        "Newsletter Subscription",
        "POST",
        "api/newsletter",
        200,
        data=newsletter_data
    )
    
    print("\n" + "="*60)
    print(f"📊 Local API Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.issues:
        print("\n🚨 Issues Found:")
        for i, issue in enumerate(tester.issues, 1):
            print(f"{i}. {issue['endpoint']}: {issue['issue']} (Priority: {issue['fix_priority']})")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())