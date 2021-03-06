import React from 'react';
import AbilityList from './AbilityList';
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from './ModelTitle';
import { Model } from '../types';

type Props = {
  model: Model
};

export function InitiativePhaseDetails(props: Props) {
  return (
    <Row>
      <Col>
        <ModelTitle model={props.model}/>
        <AbilityList abilities={props.model.abilities} phase='initiative'/>
      </Col>
    </Row>
  );
}

export function hasInitiativePhase(model: Model) {
  return ((model.abilities.filter((x) => (x.phases.indexOf("initiative") >= 0))).length > 0)
}
