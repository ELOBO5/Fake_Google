/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("index.html", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    describe("head", () => {
        test("it has a title", () => {
            const head = document.querySelector("head");
            expect(head).toBeTruthy();
            expect(head.textContent).toContain("Fake_Google");
        });

            describe("form", () => {
                test("it has a search button", () => {
                    let searchButton = document.querySelector("#search-btn");
                    expect(searchButton).toBeTruthy();
                    expect(searchButton.textContent).toContain("Google Search");
                });   
                test("it has a lucky button", () => {
                    let luckyButton = document.querySelector("#lucky-btn");
                    expect(luckyButton).toBeTruthy();
                    expect(luckyButton.textContent).toContain("I'm Feeling Lucky");
                }); 
               
    
            });
        });
    });