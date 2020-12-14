import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import VideoSchema from "../../models/VideoSchema";
import Video from "./Video";

@InputType()
class VideoType {
  @Field()
  description: String;
  @Field()
  name: String;
  @Field()
  category: String;
}

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();
    return videos;
  }

  @Mutation(() => Video)
  async createVideos(@Arg("videoInput") videoInput: VideoType) {
    const video = await VideoSchema.create(videoInput);
    return video;
  }
}

export default VideoResolver;
