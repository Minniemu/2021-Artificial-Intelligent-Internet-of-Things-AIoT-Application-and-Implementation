//define
int led = 13;
int count;
int delta = 200;
int count_init =2000;


// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(led, OUTPUT);
  Serial.begin(9600);
  count = count_init;
}

// the loop function runs over and over again forever
void loop() {
  Serial.println(count);
  if(count > delta){
    count -= delta;
  }else{
    count = count_init;
  }
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(count);                       // wait for a second
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  delay(count);                       // wait for a second
}