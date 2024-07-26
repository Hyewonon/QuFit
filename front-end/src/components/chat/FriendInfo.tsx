import { StartChatIcon, DeleteFriendIcon } from '@assets/svg/chat';
import useChatStateStore from '@stores/chat/chatStateStore';
import useCloseStateStore from '@stores/chat/closeStateStore';

interface FriendInfoProps {
    id: string;
    nickname: string;
    profileImage: string;
}

const FriendInfo = ({ id, nickname, profileImage }: FriendInfoProps) => {
    const setChatState = useChatStateStore((state) => state.setChatState);
    const setIsClosed = useCloseStateStore((state) => state.setIsClosed);

    const handleStartChatButton = () => {
        setChatState([
            {
                id: id,
                nickname: nickname,
                profileImage: profileImage,
            },
        ]);
        setIsClosed(false);
    };

    return (
        <div className="flex flex-col">
            <div className="w-full h-0.5 bg-hotPink" />
            <div className="flex items-center justify-between pl-1 pr-9 lg:pr-7 xs:pr-2">
                <div className="flex items-center py-5 lg:py-3">
                    <img
                        src={profileImage}
                        alt="user profile image"
                        className="rounded-full w-14 h-14 lg:w-12 lg:h-12 xs:w-12 xs:h-12"
                    />
                    <p className="text-2xl text-white mx-3.5 max-w-72 truncate lg:text-xl lg:mx-2.5 lg:max-w-60 xs:text-lg xs:max-w-52 xs:mx-2">
                        {nickname}ddddddddddddddddddddddd
                    </p>
                    <button>
                        <DeleteFriendIcon className="w-6 lg:w-5 md:w-8 xs:w-6 xs:mr-10" />
                    </button>
                </div>
                <button onClick={handleStartChatButton}>
                    <StartChatIcon className="w-8 lg:w-7 md:w-10" />
                </button>
            </div>
        </div>
    );
};

export default FriendInfo;
