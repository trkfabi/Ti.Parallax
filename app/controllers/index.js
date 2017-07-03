//  Hyperloop parallax effect for the icons
var UIView = require('UIKit/UIView'),
	NSMutableArray = require('Foundation/NSMutableArray'),
	UIInterpolatingMotionEffect = require('UIKit/UIInterpolatingMotionEffect'),
	UIMotionEffectGroup = require('UIKit/UIMotionEffectGroup'),
	UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis = require('UIKit/UIInterpolatingMotionEffect').UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis,
	UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis = require('UIKit/UIInterpolatingMotionEffect').UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis;
		
// Set min/max bounds		
var xTilt = UIInterpolatingMotionEffect.alloc().initWithKeyPathType( "center.x", UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis);
xTilt.minimumRelativeValue = -30.0;
xTilt.maximumRelativeValue = 30.0;	

var yTilt = UIInterpolatingMotionEffect.alloc().initWithKeyPathType("center.y", UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis);
yTilt.minimumRelativeValue = -30.0;
yTilt.maximumRelativeValue = 30.0;	

// Group both horizontal and vertical effect so we can apply them together.
var group = new UIMotionEffectGroup();
var effects = new NSMutableArray();
effects.addObject(xTilt);
effects.addObject(yTilt);
group.motionEffects = effects;

// Apply to each view on the screen

var icon1Native = UIView.cast($.icon1);
icon1Native.addMotionEffect(group);

var icon2Native = UIView.cast($.icon2);
icon2Native.addMotionEffect(group);

var icon3Native = UIView.cast($.icon3);
icon3Native.addMotionEffect(group);

var icon4Native = UIView.cast($.icon4);
icon4Native.addMotionEffect(group);	

$.index.open();