package com.cupid.qufit.domain.video.dto;

import com.cupid.qufit.entity.Tag;
import com.cupid.qufit.entity.video.VideoRoom;
import com.cupid.qufit.entity.video.VideoRoomHobby;
import com.cupid.qufit.entity.video.VideoRoomPersonality;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VideoRoomRequest {

    private Long videoRoomId; // 방 아이디
    @NotEmpty
    private String videoRoomName; // 방 제목
    @Size(min = 1, max = 4, message = "인원수는 1:1~4:4 입니다")
    private int maxParticipants; // 최대 인원수
    private List<Long> videoRoomHobbys; // 방 취미 태그
    private List<Long> videoRoomPersonalitys; // 방 성격 태그
    private Long participantId; // 참가자 아이디

    public static VideoRoom to(VideoRoomRequest videoRoomRequest) {
        List<VideoRoomHobby> videoRoomHobbies = new ArrayList<>();
        if (videoRoomRequest.getVideoRoomHobbys() != null) {
            for (Long hobbyId : videoRoomRequest.getVideoRoomHobbys()) {
                videoRoomHobbies.add(VideoRoomHobby.builder().tag(Tag.builder().id(hobbyId).build()).build());
            }
        }

        List<VideoRoomPersonality> videoRoomPersonalities = new ArrayList<>();
        if (videoRoomRequest.getVideoRoomPersonalitys() != null) {
            for (Long personalityId : videoRoomRequest.getVideoRoomPersonalitys()) {
                videoRoomPersonalities.add(
                        VideoRoomPersonality.builder().tag(Tag.builder().id(personalityId).build()).build());
            }
        }
        return VideoRoom.builder()
                        .videoRoomName(videoRoomRequest.getVideoRoomName())
                        .createdAt(LocalDateTime.now())
                        .maxParticipants(videoRoomRequest.getMaxParticipants())
                        .videoRoomHobby(videoRoomHobbies)
                        .videoRoomPersonality(videoRoomPersonalities)
                        .build();
    }
}