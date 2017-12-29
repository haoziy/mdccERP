/**
 * Created by shenqiao on 2017/12/29.
 */

 const getAllSegment = ()=>{
    return "SELECT segment_id as segmentId,segment_start as `start`,segment_end as `end`,segment_name as segmentName FROM `table_segment`";
}

module.exports = {
    getAllSegment
}