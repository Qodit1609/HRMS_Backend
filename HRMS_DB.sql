-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema TRH
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema TRH
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `TRH` DEFAULT CHARACTER SET utf8 ;
USE `TRH` ;

-- -----------------------------------------------------
-- Table `TRH`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TRH`.`employees` (
  `emp_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `address` VARCHAR(300) NOT NULL,
  `email_id` VARCHAR(50) NOT NULL,
  `birth_date` DATE NOT NULL,
  `joining_date` DATE NOT NULL,
  `permanent_number` INT(10) NOT NULL,
  `alternate_number` INT(10) NOT NULL,
  `emergency_number` INT(10) NOT NULL,
  `emergency_name` VARCHAR(45) NOT NULL,
  `adhaar_number` INT(12) NOT NULL,
  `pan_number` VARCHAR(45) NOT NULL,
  `passport_avail` VARCHAR(45) NOT NULL,
  `passport_number` VARCHAR(45) NOT NULL,
  `address_permanent` VARCHAR(500) NOT NULL,
  `address_temp` VARCHAR(500) NOT NULL,
  `marital_status` VARCHAR(45) NOT NULL,
  `marriage_date` DATE NOT NULL,
  `father_name` VARCHAR(100) NOT NULL,
  `mother_name` VARCHAR(100) NOT NULL,
  `spouse_name` VARCHAR(100) NOT NULL,
  `no_of_children` INT NOT NULL,
  PRIMARY KEY (`emp_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TRH`.`job_title`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TRH`.`job_title` (
  `job_id` INT NOT NULL AUTO_INCREMENT,
  `designation` VARCHAR(200) NOT NULL,
  `department` VARCHAR(200) NOT NULL,
  `job_type` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`job_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TRH`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TRH`.`projects` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `job_id` INT NOT NULL,
  `project_name` VARCHAR(100) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `duration` DATETIME NOT NULL,
  PRIMARY KEY (`project_id`),
  INDEX `job_id_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `job_id`
    FOREIGN KEY (`job_id`)
    REFERENCES `TRH`.`job_title` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TRH`.`leave`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TRH`.`leave` (
  `leave_id` INT NOT NULL AUTO_INCREMENT,
  `emp_id` INT NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `days` INT NOT NULL,
  `reason` VARCHAR(500) NOT NULL,
  `holiday_date` DATE NOT NULL,
  `holiday_reason` VARCHAR(500) NOT NULL,
  `leave_type` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`leave_id`),
  INDEX `emp_id_idx` (`emp_id` ASC) VISIBLE,
  CONSTRAINT `emp_id`
    FOREIGN KEY (`emp_id`)
    REFERENCES `TRH`.`employees` (`emp_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TRH`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TRH`.`attendance` (
  `atten_id` INT NOT NULL AUTO_INCREMENT,
  `project_id` INT NOT NULL,
  `leave_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `total_days` INT NOT NULL,
  `present_days` INT NOT NULL,
  `week_off` INT NOT NULL,
  `punch_in` DATETIME NOT NULL,
  `punch_out` DATETIME NOT NULL,
  `login_duration` DATETIME NOT NULL,
  `lat_l` FLOAT NOT NULL,
  `long_l` FLOAT NOT NULL,
  PRIMARY KEY (`atten_id`),
  INDEX `project_id_idx` (`project_id` ASC) VISIBLE,
  INDEX `leave_id_idx` (`leave_id` ASC) VISIBLE,
  CONSTRAINT `project_id`
    FOREIGN KEY (`project_id`)
    REFERENCES `TRH`.`projects` (`project_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `leave_id`
    FOREIGN KEY (`leave_id`)
    REFERENCES `TRH`.`leave` (`leave_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
