
#include <LiquidCrystal_PCF8574.h>
#include "DHT.h"
#define DHTPIN 9 
#define DHTTYPE DHT11

LiquidCrystal_PCF8574 lcd(0x27);  
DHT dht(DHTPIN, DHTTYPE);

void setup()
{
  Serial.begin(9600);
  Serial.println("DHTxx test!");
  dht.begin(); 
  
  lcd.begin(16, 2); 
  
  lcd.setBacklight(255);
  lcd.clear();
  lcd.setCursor(0, 0);  
  lcd.print("*~ first line.");
  lcd.setCursor(0, 1);
  lcd.print("~* second line.");
} 

void loop()
{
  delay(1000);
  float h = dht.readHumidity();   
  float t = dht.readTemperature();  
  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(t);
  Serial.println(" *C ");
  
  lcd.clear();
  lcd.setCursor(0, 0); 
  lcd.print("RH  :");
  lcd.setCursor(7, 0);  
  lcd.print(h);
  lcd.setCursor(14, 0);
  lcd.print("%");

  lcd.setCursor(0, 1);  
  lcd.print("Temp:");
  lcd.setCursor(7, 1);  
  lcd.print(t);
  lcd.setCursor(13, 1);
  lcd.print((char)223); 
  lcd.setCursor(14, 1);
  lcd.print("C");
 
} 
