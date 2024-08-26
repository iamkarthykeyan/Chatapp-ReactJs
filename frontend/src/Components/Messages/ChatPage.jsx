import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatPage = (props) => {
    const chatProps = useMultiChatLogic(
        'REACT_APP_PROJECT_ID',  // Replace with your project ID
        props.user.username,
        props.user.secret
    );

    return (
        <div style={{ height: '100vh',width:'100vw' }}>
            <PrettyChatWindow
                projectId="REACT_APP_PROJECT_ID"  // Replace with import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID if using environment variables
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%', width:'100%'}}
            />
        </div>
    );
};

export default ChatPage;
