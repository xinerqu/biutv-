
 let body= $response.body;
let obj= JSON.parse(body);
delete obj.code;
delete obj.msg;
delete obj.pagecount;
delete obj.limit;
delete obj.list[vod_id;
delete obj.list[type_id;
delete obj.list[type_id_1;
delete obj.list[group_id;
delete obj.list[vod_sub;
delete obj.list[vod_en;
delete obj.list[vod_status;
delete obj.list[vod_letter;
delete obj.list[vod_color;
delete obj.list[vod_tag;
delete obj.list[vod_class;
delete obj.list[vod_pic_thumb;
delete obj.list[vod_pic_slide;
delete obj.list[vod_pic_screenshot;
delete obj.list[vod_pic_slide;
delete obj.list[vod_actor;
delete obj.list[vod_director;
delete obj.list[vod_writer;
delete obj.list[vod_behind;
delete obj.list[vod_blurb;
delete obj.list[vod_remarks;
delete obj.list[vod_pubdate;
delete obj.list[vod_total;
delete obj.list[vod_serial;
delete obj.list[vod_tv;
delete obj.list[vod_weekday;
delete obj.list[vod_area;
delete obj.list[vod_lang;
delete obj.list[vod_year;
delete obj.list[vod_version;
delete obj.list[vod_state;
delete obj.list[vod_author;
delete obj.list[vod_jumpurl;
delete obj.list[vod_tpl;
delete obj.list[vod_tpl_play;
delete obj.list[vod_tpl_down;
delete obj.list[vod_isend;
delete obj.list[vod_lock;
delete obj.list[vod_level;
delete obj.list[vod_copyright;
delete obj.list[vod_points;
delete obj.list[vod_points_play;
delete obj.list[vod_points_down;
delete obj.list[vod_hits;
delete obj.list[vod_hits_day;
delete obj.list[vod_hits_week;
delete obj.list[vod_hits_month;
delete obj.list[vod_duration;
delete obj.list[vod_up;
delete obj.list[vod_down;
delete obj.list[vod_score;
delete obj.list[vod_score_all;
delete obj.list[vod_score_num;
delete obj.list[vod_time;
delete obj.list[vod_time_add;
delete obj.list[vod_time_hits;
delete obj.list[vod_time_make;
delete obj.list[vod_trysee;
delete obj.list[vod_douban_id;
delete obj.list[vod_reurl;
delete obj.list[vod_douban_score;
delete obj.list[vod_rel_vod;
delete obj.list[vod_rel_art;
delete obj.list[vod_pwd;
delete obj.list[vod_pwd_url;
delete obj.list[vod_pwd_play;
delete obj.list[vod_pwd_play_url;
delete obj.list[vod_pwd_down;
delete obj.list[vod_pwd_down_url;
delete obj.list[vod_content;
delete obj.list[vod_play_from;
delete obj.list[vod_play_server;
delete obj.list[vod_play_note;
$done({body: JSON.stringify(obj)});  
