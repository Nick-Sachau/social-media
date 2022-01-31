import { Message } from 'semantic-ui-react'

export const HeaderMessage = () => {
  return <Message color="teal" icon="settings" header="Header message header" content="message-contents"/>
};

export const FooterMesage = () => {
  return <Message header="footer message header" content="message-contents"/>
}

