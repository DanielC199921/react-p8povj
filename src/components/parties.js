import React from 'react';
export default function Parties () {
  const partyName = [
    'הליכוד',
    'יש עתיד',
    'הציונות הדתית',
    'המחנה הממלכתי',
    'ש"ס',
    'יהדות התורה',
    'ישראל ביתנו',
    'רע"מ',
    'חד"ש - תע"ל',
    'העבודה',
  ];

  const mandates = [32, 24, 14, 12, 11, 7, 6, 5, 5, 4];
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className ='parties'>
      
      {index.map((index) => (
        <div>{<input type = "radio" name="party"></input>} - {mandates[index]} - {partyName[index]}</div>
      ))}
    </div>
  );
}