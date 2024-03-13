import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';

export const fourGesture = new GestureDescription('Four');


// thumb:
fourGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, .6);
fourGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
fourGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
fourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
fourGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
fourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.6);

// ring:
fourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);

// pinky:
fourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fourGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.6);