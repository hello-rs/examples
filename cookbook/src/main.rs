use crate::codes::crand;
use anyhow::anyhow;
use encoding::{all::GB18030, DecoderTrap, Encoding};
use time::macros::{date, datetime};
use time::Weekday::Wednesday;
use time::{Date, OffsetDateTime, PrimitiveDateTime, UtcOffset, Duration};
mod codes;

fn main() {
    println!("{}", time::OffsetDateTime::now_utc());

    let date = Date::from_iso_week_date(2022, 1, Wednesday).unwrap();
    let datetime = date.with_hms(13, 0, 55).unwrap();
    let datetime_off = datetime.assume_offset(UtcOffset::from_hms(1, 2, 3).unwrap());

    println!("{date}, {datetime}, {datetime_off}");
    // 2022-01-01, 2022-01-01 13:00:55.0, 2022-01-01 13:00:55.0 +01:02:03

    let date = date!(2022 - 01 - 01);
    let datetime = datetime!(2022-01-01 13:00:55);
    let datetime_off = datetime!(2022-01-01 13:00:55 +1:02:03);

    println!("{date}, {datetime}, {datetime_off}");
    // 2022-01-01, 2022-01-01 13:00:55.0, 2022-01-01 13:00:55.0 +01:02:03
    let a = datetime!(2022-01-01 10:00:55);
    let b = datetime!(2022-01-01 13:00:00);

    let duration: Duration = b - a;
    println!("{}", b - a);
}
fn t() {}
