import banana_dev as banana

def Summarize(text):
    api_key = "ad3f1fa9-73d5-4a6a-b97c-bbddb025a265"
    model_key = "c255e071-7ee0-4eae-b1ca-844dbd632e70"

    model_params = {
        "min_length": 30,
        "max_length": 150,
        "no_repeat_ngram_size": 3,
        "early_stopping": False
    }
    new_text = "summarize the following text in under 6 sentences: \n" + text
    model_payload = {"prompt": new_text, "params": model_params}
    res = banana.run(api_key, model_key, model_payload)

    return res["modelOutputs"][0]

def Search(text, query):
    api_key = "ad3f1fa9-73d5-4a6a-b97c-bbddb025a265"
    model_key = "c255e071-7ee0-4eae-b1ca-844dbd632e70"

    model_params = {
        "min_length": 3,
        "max_length": 150,
        "no_repeat_ngram_size": 3,
        "early_stopping": False
    }
    if query[-1] != "?":
        query = query + "?"

    new_text = 'Answer the following questions based on this text. Give an explanation for your answer. If the answer is not in the text, return "unanswerable":\n\n' + text + "\nQ: " + query
    model_payload = {"prompt": new_text, "params": model_params}

    res = banana.run(api_key, model_key, model_payload)

    return res["modelOutputs"][0]

def search_all(data, query):
    api_key = "ad3f1fa9-73d5-4a6a-b97c-bbddb025a265"
    model_key = "c255e071-7ee0-4eae-b1ca-844dbd632e70"

    model_params = {
        "min_length": 3,
        "max_length": 150,
        "no_repeat_ngram_size": 3,
        "early_stopping": False
    }
    if query[-1] != "?":
        query = query + "?"

    document_ids = []
    answers = []
    for document_id, text in data.items():
        new_text = 'Answer the following questions based on this text. Give an explanation for your answer. If the answer is not in the text, return "unanswerable:\n\n' + text + "\nQ: " + query
        model_payload = {"prompt": new_text, "params": model_params}

        res = banana.run(api_key, model_key, model_payload)

        if "unanswerable" not in res["modelOutputs"][0]:
            document_ids.append(document_id)
            answers.append(res["modelOutputs"][0])
            break

    return {"document_ids": document_ids, "answers": answers}
