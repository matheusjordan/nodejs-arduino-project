#define LedNum 13
#define LightDelay 500

int cmd;

void setup(){
  pinMode(LedNum, OUTPUT);
  Serial.begin(9600);
}

void loop(){
  cmd = Serial.read();
  for (int i=0; i < (cmd - 48); i++) {
    Serial.println("Luz piscando");
    lightOn();
    lightOff();
  }
}

void lightOn() {
  digitalWrite(LedNum, HIGH);
  delay(LightDelay);
}


void lightOff() {
  digitalWrite(LedNum, LOW);
  delay(LightDelay);
}
