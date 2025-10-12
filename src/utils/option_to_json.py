#!/usr/bin/env python3
import argparse
import json
import re
from bs4 import BeautifulSoup

def parse_options(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    options = soup.find_all("option")
    
    result = []
    for opt in options:
        raw_value = opt.get("value", "")
        parts = raw_value.split(";")
        if len(parts) != 2:
            continue
        school, cost = parts
        # remove city/state from school
        #school = school.split(",")[0].strip()
        # clean cost to integer
        cost = int(re.sub(r"[^\d]", "", cost))
        
        result.append({
            "name": school,
            "cost": cost,
            "colors": []
        })
    return result

def main():
    parser = argparse.ArgumentParser(description="Convert <option> blocks to JSON.")
    parser.add_argument("input_html", help="Path to input HTML file with <option> blocks")
    parser.add_argument("output_json", help="Path to save JSON output")
    args = parser.parse_args()

    with open(args.input_html, "r", encoding="utf-8") as f:
        html_content = f.read()

    data = parse_options(html_content)

    with open(args.output_json, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

    print(f"✅ Converted {len(data)} <option> entries into {args.output_json}")

if __name__ == "__main__":
    main()
# Example usage:
# python3 src/utils/test.py src/utils/options.html src/utils/schools.json   