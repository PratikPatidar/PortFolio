const payload = {
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "You are a helpful assistant helping a user fill out a job application.\nAnswer the user's question based strictly on their profile data below. Be concise. \nIf the information is not in the profile, say \"I don't have that information in your profile.\"\n\nUser Profile:\n{\n  \"firstName\": \"Pratik\",\n  \"lastName\": \"Patidar\",\n  \"fullName\": \"Pratik Patidar\",\n  \"email\": \"pratikpatidar7990@gmail.com\",\n  \"phone\": \"+91-8269647990\",\n  \"dob\": \"01/01/2000\",\n  \"city\": \"Indore\",\n  \"country\": \"India\",\n  \"linkedin\": \"https://linkedin.com/in/pratik-patidar\",\n  \"github\": \"https://github.com/pratik-patidar\",\n  \"portfolio\": \"https://pratikpatidar.com\"\n}\n\nEmployment History:\n{\n  \"currentCompany\": \"Techstuff Private Limited\",\n  \"currentTitle\": \"Frontend Engineer\",\n  \"totalExperience\": \"1.3\",\n  \"noticePeriod\": \"30 days\",\n  \"currentCTC\": \"2.18 LPA\",\n  \"expectedCTC\": \"Negotiable\"\n}\n\nStandard Answers:\n{\n  \"workAuthorization\": \"Authorized to work in India\",\n  \"visaSponsorship\": \"No\",\n  \"relocation\": \"Yes\",\n  \"noticePeriod\": \"30 days\",\n  \"salaryExpectation\": \"Negotiable\"\n}\n\n\nQuestion: hi"
        }
      ]
    }
  ]
};

fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDnos-Ij-ndWg1LO5X8id7ql4Uh1BAaPlI', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
}).then(async res => {
  console.log('Status:', res.status);
  console.log('Body:', await res.text());
}).catch(console.error);
