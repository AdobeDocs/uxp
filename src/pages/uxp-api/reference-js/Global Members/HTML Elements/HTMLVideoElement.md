
<a name="htmlvideoelement" id="htmlvideoelement"></a>

# window.HTMLVideoElement
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| preload | `string` |  | Determines how much the media data be loaded when the plugin loads.      This can be one of the followings. Default is "metadata".      <ul>          <li>'none': Video should not be loaded</li>          <li>'metadata': Only video metadata is fetched</li>          <li>'auto': The whole video file can be downloaded</li>          <li>''(empty string): Synonym of the 'auto' value</li>      </ul>      example: <br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" preload="metadata"></video>` |
| autoplay | `boolean` | `false` | Video automatically begins to play back as soon as loading the data.      example: <br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoplay></video>` |



<a name="htmlvideoelement-src" id="htmlvideoelement-src"></a>

## src : `string`
URL of a media resource.



<a name="htmlvideoelement-currenttime" id="htmlvideoelement-currenttime"></a>

## currentTime : `number`
Current playback time in seconds.



<a name="htmlvideoelement-duration" id="htmlvideoelement-duration"></a>

## duration : `number`
Length of the media in seconds.



<a name="htmlvideoelement-muted" id="htmlvideoelement-muted"></a>

## muted : `boolean`
Whether the media element is muted.



<a name="htmlvideoelement-volume" id="htmlvideoelement-volume"></a>

## volume : `number`
The volume at which the media will be played.
Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.



<a name="htmlvideoelement-volume" id="htmlvideoelement-volume"></a>

## volume
Set the volume.
Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.

**Emits**: `event:volumechange`  

| Param | Type | Description |
| --- | --- | --- |
| newValue | `number` | new volume |



<a name="htmlvideoelement-played" id="htmlvideoelement-played"></a>

## played : `TimeRanges`
Range of the media source.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges  


<a name="htmlvideoelement-paused" id="htmlvideoelement-paused"></a>

## paused : `boolean`
Whether the media element is paused.



<a name="htmlvideoelement-ended" id="htmlvideoelement-ended"></a>

## ended : `boolean`
Whether the media element has ended playback.



<a name="htmlvideoelement-error" id="htmlvideoelement-error"></a>

## error : `MediaError`
MediaError for the most recent error, or null if there has not been an error.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/MediaError  


<a name="htmlvideoelement-loop" id="htmlvideoelement-loop"></a>

## loop : `boolean`
Whether the media element should start over when it reaches the end.



<a name="htmlvideoelement-audiotracks" id="htmlvideoelement-audiotracks"></a>

## audioTracks : `AudioTrackList`
AudioTrackList object listing all of the AudioTrack objects representing the media's audio tracks.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList  


<a name="htmlvideoelement-videotracks" id="htmlvideoelement-videotracks"></a>

## videoTracks : `VideoTrackList`
VideoTrackList object listing all of the VideoTrack objects representing the media's video tracks.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList  


<a name="htmlvideoelement-texttracks" id="htmlvideoelement-texttracks"></a>

## textTracks : `TextTrackList`
TextTrackList object listing all of the TextTrack objects representing the media's text tracks

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList  


<a name="htmlvideoelement-playbackrate" id="htmlvideoelement-playbackrate"></a>

## playbackRate : `number`
The rate at which the media is being played back.
1.0 is normal speed, values lower than 1.0 make the media play slower than normal,
higher values make it play faster. Default is 1.0.



<a name="htmlvideoelement-playbackrate" id="htmlvideoelement-playbackrate"></a>

## playbackRate
Set the rate at which the media is being played back.

**Emits**: `event:ratechange`  

| Param | Type | Description |
| --- | --- | --- |
| newValue | `number` | playback rate |



<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

## dataset
Access to all the custom data attributes (data-*) set.

**See**: [HTMLElement - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)  


<a name="htmlelement-innertext" id="htmlelement-innertext"></a>

## innerText : `string`


<a name="htmlelement-lang" id="htmlelement-lang"></a>

## lang : `string`
Base language of an element's attribute values and text content.

**See**: [HTMLElement - lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)  


<a name="htmlvideoelement-canplaytype" id="htmlvideoelement-canplaytype"></a>

## canPlayType(mimeType)
How likely it is that UXP's media player will be able to play media of a given MIME type.

**Returns**: `string` - How likely it is that the media can be played. One of the followings.
     <ul>
         <li>''(empty string): Media cannot be played on the current device.</li>
         <li>'probably': Media is probably playable on the current device.</li>
         <li>'maybe': There is not enough information to determine whether the media can play.</li>
     </ul>  

| Param | Type | Description |
| --- | --- | --- |
| mimeType | `string` | MIME type of the media. |



<a name="htmlvideoelement-load" id="htmlvideoelement-load"></a>

## load()
Resets the media to its initial state and begins the process of selecting a media source
and loading the media in preparation for playback.
The amount of media data that is prefetched is determined by the value of 'preload' attribute.

**Emits**: `event:uxpvideoload`  


<a name="htmlvideoelement-play" id="htmlvideoelement-play"></a>

## play()
Attempts to begin playback of the media.
<br>Note that it returns a resolved Promise regardless of the actual result.
It notifies an error over the error event.

**Returns**: `Promise<void>` Resolved when playback has been started, or rejected if playback cannot be started.  
**Emits**: `event:uxpvideoplay`, `event:uxpvideocomplete`  


<a name="htmlvideoelement-pause" id="htmlvideoelement-pause"></a>

## pause()
Pause the playback of the media. If the media is already in a paused state, no effect.

**Emits**: `event:uxpvideopause`  


<a name="htmlvideoelement-stop" id="htmlvideoelement-stop"></a>

## stop()
Pause the playback of the media and set the current playback time to the beginning.

**Emits**: `event:uxpvideostop`  

  