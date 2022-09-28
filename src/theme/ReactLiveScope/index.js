import React from 'react';
import { SfButton } from 'react-sf-building-blocks';
import { SfInput } from 'react-sf-building-blocks';
import { SfNav } from 'react-sf-building-blocks';
import {ArrowRight, CardHeading, EnvelopeFill, PhoneFill, CalendarEventFill, Search} from 'react-bootstrap-icons';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  SfButton,
  SfInput,
  SfNav,
  ArrowRight,
  CardHeading,
  EnvelopeFill,
  PhoneFill,
  CalendarEventFill,
  Search
};

export default ReactLiveScope;
