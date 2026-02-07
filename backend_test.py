#!/usr/bin/env python3
import requests
import json
import sys
from datetime import datetime

class MakeMyDukaanAPITester:
    def __init__(self, base_url="https://demobackend.emergentagent.com"):
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
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=default_headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=default_headers, timeout=10)

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

    def test_health_check(self):
        """Test health check endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200
        )
        return success

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_contact_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "phone": "+91 98765 43210",
            "business_type": "Retail / Shop",
            "budget": "₹15,000 - ₹25,000",
            "message": "Test message for contact form"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_contact_data
        )
        return success

    def test_contact_form_validation(self):
        """Test contact form validation with missing data"""
        invalid_data = {
            "name": "",
            "email": "invalid-email",
            "phone": "",
        }
        
        success, response = self.run_test(
            "Contact Form Validation",
            "POST", 
            "api/contact",
            422,  # Expecting validation error
            data=invalid_data
        )
        return success

    def test_newsletter_subscription(self):
        """Test newsletter subscription"""
        newsletter_data = {
            "email": "newsletter@example.com"
        }
        
        success, response = self.run_test(
            "Newsletter Subscription",
            "POST",
            "api/newsletter", 
            200,
            data=newsletter_data
        )
        return success

    def test_newsletter_duplicate(self):
        """Test duplicate newsletter subscription"""
        newsletter_data = {
            "email": "duplicate@example.com"
        }
        
        # First subscription
        self.run_test(
            "Newsletter First Subscription",
            "POST",
            "api/newsletter",
            200,
            data=newsletter_data
        )
        
        # Second subscription (should return info message)
        success, response = self.run_test(
            "Newsletter Duplicate Subscription",
            "POST", 
            "api/newsletter",
            200,
            data=newsletter_data
        )
        return success

    def test_invalid_endpoints(self):
        """Test invalid endpoints return 404"""
        success, response = self.run_test(
            "Invalid Endpoint",
            "GET",
            "api/nonexistent",
            404
        )
        return success

def main():
    print("🚀 Starting MakeMyDukaan API Tests")
    print("="*50)
    
    # Setup
    tester = MakeMyDukaanAPITester()
    
    # Run all tests
    test_results = []
    
    # Health check
    test_results.append(tester.test_health_check())
    
    # Contact form tests
    test_results.append(tester.test_contact_form_submission())
    test_results.append(tester.test_contact_form_validation())
    
    # Newsletter tests  
    test_results.append(tester.test_newsletter_subscription())
    test_results.append(tester.test_newsletter_duplicate())
    
    # Invalid endpoint test
    test_results.append(tester.test_invalid_endpoints())
    
    # Print results
    print("\n" + "="*50)
    print(f"📊 API Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.issues:
        print("\n🚨 Issues Found:")
        for i, issue in enumerate(tester.issues, 1):
            print(f"{i}. {issue['endpoint']}: {issue['issue']} (Priority: {issue['fix_priority']})")
    else:
        print("✅ All API tests passed successfully!")
    
    # Return appropriate exit code
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())