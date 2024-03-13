import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';

export const fiveGesture = new GestureDescription('Five');


// thumb:
fiveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, .6);
fiveGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
fiveGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
fiveGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fiveGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
fiveGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
fiveGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fiveGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.6);

// ring:
fiveGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fiveGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);

// pinky:
fiveGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fiveGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.6);