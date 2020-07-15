
describe("Get URL page title", function() {
	let email,email_value,name,name_value,phone,phone_value,address
	,address_value,department_dropdown,department_dropdown_option_cssselectorvalue,submit_button_css_selector
	,propertiesReader,properties,retrieve_button_xpath,retrieve_enter_name_field,retrieve_button;
	browser.ignoreSynchronization = true;

beforeAll(function(){
 browser.get("http://localhost:4200");
 browser.getCurrentUrl().then(url =>{
 console.log("The current URL is :" + url);
 browser.sleep(3000);

    propertiesReader = require('properties-reader');
	properties = propertiesReader('/Users/manishasagar/Documents/Protractor_test/properties/application.properties');
	 url=properties.get("Url")
	 email= properties.get("email")
	 email_value= properties.get("email_value") 
     name= properties.get("name")
	 name_value= properties.get("name_value") 
     phone= properties.get("phone")
	 phone_value= properties.get("phone_value")
     address= properties.get("address")
	 address_value= properties.get("address_value")
	 department_dropdown= properties.get("department_dropdown")
	 department_dropdown_option_cssselectorvalue = properties.get("department_dropdown_option_cssselectorvalue")
	 submit_button_css_selector = properties.get("submit_button_css_selector")
	retrieve_button_xpath =properties.get("retrieve_button_xpath")
	retrieve_enter_name_field=properties.get("retrieve_enter_name_field")
	retrieve_button=properties.get("retrieve_button")
});
	})
	
it("Entering form elements",function(){
    element(by.xpath(email)).sendKeys(email_value);
    browser.sleep(1000);   
    element(by.name(name)).sendKeys(name_value);
    browser.sleep(1000);       
    element(by.name(phone)).sendKeys(phone_value);
    browser.sleep(1000);
    element(by.name(address)).sendKeys(address_value);
    browser.sleep(1000);
    element(by.name(department_dropdown)).element(by.css(department_dropdown_option_cssselectorvalue)).click();
    browser.sleep(1000);
    element(by.css(submit_button_css_selector)).click();
	browser.sleep(3000);
	//write into properties file - variable (hardcoded user input){name}
  })

it("Retrieve Tab",function(){
	element(by.xpath(retrieve_button_xpath)).click();
	browser.sleep(3000);
	element(by.xpath(retrieve_enter_name_field)).sendKeys(name_value);
	element(by.xpath(retrieve_button)).click();
	browser.sleep(3000);
	expect(element(by.name(name)).isDisplayed()).toBe(true);

})

})