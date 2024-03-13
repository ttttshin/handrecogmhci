import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';

export const threeGesture = new GestureDescription('Three');


// thumb:
threeGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
threeGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
threeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
threeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
threeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
threeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
threeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
threeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
threeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
threeGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
threeGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);

// pinky:
threeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
