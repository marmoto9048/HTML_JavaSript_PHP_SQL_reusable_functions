use billing;
CREATE TABLE IF NOT EXISTS `billing`(
   `billing_id` INT UNSIGNED AUTO_INCREMENT,
   `billing_type` VARCHAR(40)  NULL,
   `billing_title` VARCHAR(40)  NULL,
   `billing_money` VARCHAR(40)  NULL,
   `billing_pay_method` VARCHAR(40)  NULL,
   `billing_date` DATE,
   `billing_remarks` VARCHAR(40)  NULL,
   PRIMARY KEY ( `billing_id` )
)  DEFAULT CHARSET=utf8;
