var ghgVideos = [
    ["gt_0006.mp4", "ghg_0006.mp4", "our_0006.mp4"],
    ["gt_0090.mp4", "ghg_0090.mp4", "our_0090.mp4"],
    ["gt_0270.mp4", "ghg_0270.mp4", "our_0270.mp4"],
    ["gt_0426.mp4", "ghg_0426.mp4", "our_0426.mp4"],
    ["gt_0474.mp4", "ghg_0474.mp4", "our_0474.mp4"],
    ["gt_0522.mp4", "ghg_0522.mp4", "our_0522.mp4"]
]

var nvsVideos = [
    ["scene_0008_01_000000_frame_000020.png", "scene_0008_01_000000_frame_000020.mp4"],
    ["scene_0152_01_000050_frame_000018.png", "scene_0152_01_000050_frame_000018.mp4"],
    ["scene_0310_04_000050_frame_000020.png", "scene_0310_04_000050_frame_000020.mp4"]
]

function ChangeSceneGHG(idx){
    var li_list = document.getElementById("ghg").children;
    // var m_list = document.getElementById("method-view-ul").children;
    // console.log(idx);
    // console.log(li_list);

    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";

    currentVideos = ghgVideos[idx]
    document.getElementById("ghg_gt").src = "./files/ghg/" + currentVideos[0];
    document.getElementById("ghg_ghg").src = "./files/ghg/" + currentVideos[1];
    document.getElementById("ghg_ours").src = "./files/ghg/" + currentVideos[2];
}

function ChangeSceneCrossDomain(idx){
    var li_list = document.getElementById("crossdomain").children;
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    
    currentVideos = nvsVideos[idx]
    document.getElementById("crossdomain_ref").src = "./files/crossdomain/" + currentVideos[0];
    document.getElementById("crossdomain_video").src = "./files/crossdomain/" + currentVideos[1];
}