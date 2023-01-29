from io import BytesIO
import base64
import banana_dev as banana

def Whisper(base64_string):
    api_key = "ad3f1fa9-73d5-4a6a-b97c-bbddb025a265"
    model_key = "ab94a080-467e-4cc6-8c12-ee71479750ba"

    model_payload = {"mp3BytesString": base64_string}
    res = banana.run(api_key, model_key, model_payload)

    return res["modelOutputs"][0]["text"]
