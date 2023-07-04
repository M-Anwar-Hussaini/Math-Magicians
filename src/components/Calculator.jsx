import React from 'react';
import Button from './Button';
import Calculation from './CalculationBar';
import '../css/bootstrap.min.css';
import '../css/Container.css';

const Container = () => (
  <div className="Container row border border-warning p-2 rounded">
    {/* Calculation display */}
    <Calculation />
    {/* Row 1 */}
    <Button value="AC" />
    <Button value="+/-" />
    <Button value="%" />
    <Button value="÷" btnType="warning" />

    {/* Row 2 */}
    <Button value="7" />
    <Button value="8" />
    <Button value="9" />
    <Button value="*" btnType="warning" />

    {/* Row 3 */}
    <Button value="4" />
    <Button value="5" />
    <Button value="6" />
    <Button value="-" btnType="warning" />

    {/* Row 3 */}
    <Button value="1" />
    <Button value="2" />
    <Button value="3" />
    <Button value="+" btnType="warning" />

    {/* Row 4 */}
    <Button value="0" col={6} />
    <Button value="." />
    <Button value="=" btnType="warning" />
  </div>
);

export default Container;
