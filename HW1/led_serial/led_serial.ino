const byte LED =13; //LED針腳
char val; //儲存接收資料的變數，採字元類型
void setup() {
  // put your setup code here, to run once:
  pinMode(LED,OUTPUT);
  Serial.begin(9600);
  Serial.print("Welcome to Android!");
  
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available()){
  	val = Serial.read();
  	if(val == '1'){
  		digitalWrite(LED, HIGH);
  		Serial.print("LED ON");
  	}
  	else if(val == '0'){
  		digitalWrite(LED, LOW);
  		Serial.print("LED OFF");
  	}
  }
}