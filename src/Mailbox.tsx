import React from 'react';

export function Mailbox(props: { unreadMessage: number[] }) {
  const unreadMessage = props.unreadMessage;
  return (
      <div>
        <h1>Hello</h1>
        {unreadMessage.length &&
        <h2>
            You have {unreadMessage.length} unread messages.
        </h2>
        }
      </div>
  );
}
