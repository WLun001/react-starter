import React from 'react';

export function ListItem(props: { value: any }) {
  return <li>{props.value}</li>
}

export function NumberList(props: { numbers: number[] }) {
  const numbers = props.numbers;
  // const listItems = numbers.map(number => {
  //   <ListItem value={number}/>
  // });
  return (
      <ul>
        {numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number}/>
        )}
      </ul>
  )
}
