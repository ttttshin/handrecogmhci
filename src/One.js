import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';


export const oneGesture = new GestureDescription('One');


// thumb:
oneGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
oneGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
oneGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
oneGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
oneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
oneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
oneGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
oneGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
oneGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
oneGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
oneGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
oneGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
oneGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
oneGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
oneGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
oneGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
oneGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);
