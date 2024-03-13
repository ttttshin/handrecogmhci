import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';

export const rockGesture = new GestureDescription('Rock');


// thumb:
rockGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, .5);
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, .5);
rockGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
rockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rockGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
rockGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
rockGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
rockGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
rockGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
rockGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rockGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
rockGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
rockGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
rockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
rockGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
rockGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
rockGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);
