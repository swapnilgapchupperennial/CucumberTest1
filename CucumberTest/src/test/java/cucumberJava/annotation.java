package cucumberJava;

//import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver; 
import org.openqa.selenium.firefox.FirefoxDriver; 

import cucumber.annotation.en.Given; 
import cucumber.annotation.en.Then; 
import cucumber.annotation.en.When; 

public class annotation { 
   WebDriver driver = null; 
   
   
	
   @Given("^I have open the browser$") 
   public void openBrowser() { 
	  System.setProperty("webdriver.gecko.driver","/home/swapnil/eclipse-workspace/CucumberTest/geckodriver");
	  //driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	  
      driver = new FirefoxDriver(); 
   } 
	
   @When("^I open toolsqa website$") 
   public void goToFacebook() { 
      driver.get("http://toolsqa.com/"); 
   } 
	
   @Then("^I have tested if the image exist for given path$") 
   public void loginButton() { 
      if(driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[2]/div[3]/a/img")).isDisplayed()) { 
         System.out.println("Test 1 Pass"); 
      } else { 
         System.out.println("Test 1 Fail"); 
      } 
      driver.close(); 
   } 
}



