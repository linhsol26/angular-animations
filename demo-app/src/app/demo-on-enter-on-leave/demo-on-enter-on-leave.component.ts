import { Component } from '@angular/core';

import {
  bounceInOnEnterAnimation,
  bounceOutOnLeaveAnimation,
  bounceInUpOnEnterAnimation,
  bounceOutDownOnLeaveAnimation,
  bounceInDownOnEnterAnimation,
  bounceOutUpOnLeaveAnimation,
  bounceInLeftOnEnterAnimation,
  bounceInRightOnEnterAnimation,
  bounceOutLeftOnLeaveAnimation,
  bounceOutRightOnLeaveAnimation,
  fadeInOnEnterAnimation,
  fadeInUpOnEnterAnimation,
  fadeInDownOnEnterAnimation,
  fadeInLeftOnEnterAnimation,
  fadeInRightOnEnterAnimation,
  fadeInUpBigOnEnterAnimation,
  fadeInDownBigOnEnterAnimation,
  fadeInLeftBigOnEnterAnimation,
  fadeInRightBigOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeOutUpOnLeaveAnimation,
  fadeOutDownOnLeaveAnimation,
  fadeOutLeftOnLeaveAnimation,
  fadeOutRightOnLeaveAnimation,
  fadeOutUpBigOnLeaveAnimation,
  fadeOutDownBigOnLeaveAnimation,
  fadeOutLeftBigOnLeaveAnimation,
  fadeOutRightBigOnLeaveAnimation,
  flipInXOnEnterAnimation,
  flipInYOnEnterAnimation,
  flipOutXOnLeaveAnimation,
  flipOutYOnLeaveAnimation,
  lightSpeedInOnEnterAnimation,
  lightSpeedOutOnLeaveAnimation,
  rotateInOnEnterAnimation,
  rotateInUpLeftOnEnterAnimation,
  rotateInUpRightOnEnterAnimation,
  rotateInDownLeftOnEnterAnimation,
  rotateInDownRightOnEnterAnimation,
  rotateOutOnLeaveAnimation,
  rotateOutUpLeftOnLeaveAnimation,
  rotateOutUpRightOnLeaveAnimation,
  rotateOutDownLeftOnLeaveAnimation,
  rotateOutDownRightOnLeaveAnimation
} from '../../../../lib';

@Component({
  selector: 'app-demo-on-enter-on-leave',
  templateUrl: './demo-on-enter-on-leave.component.html',
  styleUrls: ['./demo-on-enter-on-leave.component.scss'],
  animations: [
    bounceInOnEnterAnimation(),
    bounceInUpOnEnterAnimation(),
    bounceOutOnLeaveAnimation(),
    bounceOutDownOnLeaveAnimation(),
    bounceInDownOnEnterAnimation(),
    bounceOutUpOnLeaveAnimation(),
    bounceInLeftOnEnterAnimation(),
    bounceInRightOnEnterAnimation(),
    bounceOutLeftOnLeaveAnimation(),
    bounceOutRightOnLeaveAnimation(),
    fadeInOnEnterAnimation(),
    fadeInUpOnEnterAnimation(),
    fadeInDownOnEnterAnimation(),
    fadeInLeftOnEnterAnimation(),
    fadeInRightOnEnterAnimation(),
    fadeInUpBigOnEnterAnimation(),
    fadeInDownBigOnEnterAnimation(),
    fadeInLeftBigOnEnterAnimation(),
    fadeInRightBigOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeOutUpOnLeaveAnimation(),
    fadeOutDownOnLeaveAnimation(),
    fadeOutLeftOnLeaveAnimation(),
    fadeOutRightOnLeaveAnimation(),
    fadeOutUpBigOnLeaveAnimation(),
    fadeOutDownBigOnLeaveAnimation(),
    fadeOutLeftBigOnLeaveAnimation(),
    fadeOutRightBigOnLeaveAnimation(),
    flipInXOnEnterAnimation(),
    flipInYOnEnterAnimation(),
    flipOutXOnLeaveAnimation(),
    flipOutYOnLeaveAnimation(),
    lightSpeedInOnEnterAnimation(),
    lightSpeedOutOnLeaveAnimation(),
    rotateInOnEnterAnimation(),
    rotateInUpLeftOnEnterAnimation(),
    rotateInUpRightOnEnterAnimation(),
    rotateInDownLeftOnEnterAnimation(),
    rotateInDownRightOnEnterAnimation(),
    rotateOutOnLeaveAnimation(),
    rotateOutUpLeftOnLeaveAnimation(),
    rotateOutUpRightOnLeaveAnimation(),
    rotateOutDownLeftOnLeaveAnimation(),
    rotateOutDownRightOnLeaveAnimation() 
  ]
})
export class DemoOnEnterOnLeaveComponent {
  animations = [
    'bounceIn',
    'bounceInUp',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'fadeInOut',
    'fadeInUpOutUp',
    'fadeInDownOutDown',
    'fadeInLeftOutRight',
    'fadeInRightOutLeft',
    'fadeInUpBigOutUpBig',
    'fadeInDownBigOutDownBig',
    'fadeInLeftBigOutRightBig',
    'fadeInRightBigOutLeftBig',
    'flipX',
    'flipY',
    'lightSpeed',
    'rotateInOut',
    'rotateInOutDownLeft',
    'rotateInOutDownRight',
    'rotateInOutUpLeft',
    'rotateInOutUpRight',
  ];
  animation = this.animations[0];

  state = true;

  toggleState() {
    this.state = !this.state;
  }
}
