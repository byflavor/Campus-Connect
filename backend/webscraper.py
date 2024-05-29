import requests
from bs4 import BeautifulSoup
import openai
from openai import OpenAI
import os

def extract_largest_text_block(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        text_blocks = soup.find_all(['p', 'div'])  
        texts = [block.get_text(separator=' ', strip=True) for block in text_blocks if len(block.get_text(strip=True)) > 100]
        largest_text = max(texts, key=len, default="No significant text found.")
    else:
        return "Failed to retrieve content."
    
    print(largest_text)
    
    # Machine learning part of the developer tool
    # Lets utilize a RAG model
    perplexityAI_key = os.environ["PERPLEXITY_API"]
    perpClient= OpenAI(
        api_key=perplexityAI_key, base_url="https://api.perplexity.ai")
    message = [
        {
        "role": "system",
        "content": "Create a json where the keys are club names and the value is club text "
        },
        {
        "role": "user",
        "content": f"The following is the text {largest_text} from this website: {url}"
        }]
    # online api's bad at system prompts
    # On top of that you can control response format
    response = perpClient.chat.completions.create(
        model="sonar-small-chat",
        response_format={"type": "json_object"},
        messages=message)
    # return a string response
    final_json = response.choices[0].message.content
    print(final_json)

if __name__ == "__main__":
    url = input("Enter the URL of the webpage: ")
    largest_text_block = extract_largest_text_block(url)
    print("Largest text block found:\n")
    print(largest_text_block)