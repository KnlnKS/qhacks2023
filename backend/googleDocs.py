import requests
import json

def createDocument(auth, title, text):
    url = "https://docs.googleapis.com/v1/documents"

    document = {
        "title": title,
    }
    headers = {
        "Authorization": auth,
    }

    ret = requests.post(url, json=document, headers=headers)
    ret_content = json.loads(ret.text)

    document_id = ret_content["documentId"]

    return document_id, text

def addText(auth, document_id, text):
    req = [
         {
            'insertText': {
                'location': {
                    'index': 1,
                },
                'text': text
            }
        }
    ]

    url = "https://docs.googleapis.com/v1/documents/" + document_id + ":batchUpdate"
    document = {
        "requests": req
    }
    headers = {
        "Authorization": auth,
    }

    ret = requests.post(url, json=document, headers=headers)
    #ret_content = json.loads(ret.text)
