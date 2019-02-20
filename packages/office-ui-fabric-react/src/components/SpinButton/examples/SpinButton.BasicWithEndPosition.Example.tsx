import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Position } from 'office-ui-fabric-react/lib/utilities/positioning';

export class SpinButtonBasicWithEndPositionExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div style={{ width: '400px' }}>
        <SpinButton
          defaultValue="0"
          iconProps={{ iconName: 'Light' }}
          label={'SpinButton After Input'}
          labelPosition={Position.end}
          min={0}
          max={100}
          step={1}
          incrementButtonAriaLabel={'Increase value by 1'}
          decrementButtonAriaLabel={'Decrease value by 1'}
        />
      </div>
    );
  }
}
