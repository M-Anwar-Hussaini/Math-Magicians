import { useEffect, useState } from 'react';

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, [time]);
  return (
    <footer className="p3 bg-success-subtle mt-auto d-flex justify-content-between container align-items-center rounded">
      <div>{time}</div>
      <h3>Developed by: Mohammad Anwar Hussaini</h3>
    </footer>
  );
}

export default Footer;
