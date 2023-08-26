use std::time::{Duration, Instant};

mod codes;
use chrono::{prelude::*, LocalResult, ParseResult};
use codes::ctime;
fn main() {
    let start = ctime::start_elapsed();
    println!("{}", ctime::now());
    println!("{}", ctime::timestamp());
    println!("{}", ctime::string());
    println!("{}", ctime::timestamp_to_time(ctime::timestamp()).unwrap());
    println!(
        "{}",
        ctime::string_to_time("2023-01-01 11:11:11")
            .unwrap()
    );
    println!("{:?}", ctime::end_elapsed(start));
}
