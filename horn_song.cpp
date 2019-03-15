#include "pitches.h"

int melody[] = {
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_A4, NOTE_GS4, NOTE_GS4, NOTE_GS4, NOTE_GS4, NOTE_F4,
  NOTE_GS4, NOTE_GS4, NOTE_FS4, NOTE_FS4, NOTE_DS4, NOTE_DS4, NOTE_DS4, NOTE_DS4,
  NOTE_AS4, NOTE_AS4, NOTE_CS5, NOTE_CS5, NOTE_DS5, NOTE_DS5, NOTE_DS5, NOTE_DS5, NOTE_CS5,
  NOTE_DS5, NOTE_DS5, NOTE_CS5, NOTE_CS5, NOTE_AS4, NOTE_AS4, NOTE_AS4
};

int noteDurations[] = {
  3,3,3,3,3,3,3,6,6,
  3,3,3,3,3,3,3,3,
  3,3,3,3,3,3,3,6,6,
  3,3,3,3,3,3,1
};

int blue = 13;
int white = 12;
int red = 11;
int sound = 8;

void setup() {
  pinMode(blue, OUTPUT);
  pinMode(white, OUTPUT);
  pinMode(red, OUTPUT);
  pinMode(sound, OUTPUT);
}

void loop() {
 for (int thisNote = 0; thisNote < 34; thisNote++){
   int noteDuration = 1000 / noteDurations[thisNote];

   int pauseBetweenNotes = noteDuration * 0.45;
   noTone(sound);

  tone(sound, melody[thisNote], noteDuration);
  digitalWrite(blue, HIGH);
  delay(pauseBetweenNotes);
  digitalWrite(blue,LOW);
  digitalWrite(white, HIGH);
  delay(pauseBetweenNotes);
  digitalWrite(white, LOW);
  digitalWrite(red, HIGH);
  delay(pauseBetweenNotes);
  digitalWrite(red, LOW);
 }
}

void flashing(){
  digitalWrite(blue, HIGH);
  delay(160);
  digitalWrite(blue,LOW);
  delay(160);
}
