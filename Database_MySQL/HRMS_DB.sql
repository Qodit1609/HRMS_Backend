-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema HRMS_EDITED
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema HRMS_EDITED
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `HRMS_EDITED` DEFAULT CHARACTER SET utf8 ;
USE `HRMS_EDITED` ;

-- -----------------------------------------------------
-- Table `HRMS_EDITED`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HRMS_EDITED`.`employees` (
  `emp_id` INT NOT NULL AUTO_INCREMENT,
  `role_type` VARCHAR(100) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `address` VARCHAR(300) NOT NULL,
  `email_id` VARCHAR(50) NOT NULL,
  `birth_date` DATE NOT NULL,
  `joining_date` DATE NOT NULL,
  `permanent_number` VARCHAR(10) NOT NULL,
  `alternate_number` VARCHAR(10) NOT NULL,
  `emergency_number` VARCHAR(10) NOT NULL,
  `emergency_name` VARCHAR(45) NOT NULL,
  `adhaar_number` VARCHAR(12) NOT NULL,
  `pan_number` VARCHAR(45) NOT NULL,
  `passport_avail` VARCHAR(45) NOT NULL,
  `passport_number` VARCHAR(45) NOT NULL,
  `address_permanent` VARCHAR(500) NOT NULL,
  `address_temp` VARCHAR(500) NOT NULL,
  `marital_status` VARCHAR(45) NOT NULL,
  `marriage_date` DATE NOT NULL,
  `father_name` VARCHAR(100) NOT NULL,
  `mother_name` VARCHAR(100) NOT NULL,
  `spouse_name` VARCHAR(100) NULL,
  `no_of_children` INT NULL,
  PRIMARY KEY (`emp_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HRMS_EDITED`.`job_title`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HRMS_EDITED`.`job_title` (
  `job_id` INT NOT NULL AUTO_INCREMENT,
  `designation` VARCHAR(200) NOT NULL,
  `department` VARCHAR(200) NOT NULL,
  `job_type` VARCHAR(100) NOT NULL,
  `Intern_mentor` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`job_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HRMS_EDITED`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HRMS_EDITED`.`projects` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `job_id` INT NOT NULL,
  `project_name` VARCHAR(100) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `duration` DATETIME NOT NULL,
  `reporting_manager` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`project_id`),
  INDEX `job_id_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `job_id`
    FOREIGN KEY (`job_id`)
    REFERENCES `HRMS_EDITED`.`job_title` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HRMS_EDITED`.`leave`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HRMS_EDITED`.`leave` (
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
    REFERENCES `HRMS_EDITED`.`employees` (`emp_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HRMS_EDITED`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HRMS_EDITED`.`attendance` (
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
  `break_time` DATETIME NOT NULL,
  `break_counts` INT NOT NULL,
  `break_reason` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`atten_id`),
  INDEX `project_id_idx` (`project_id` ASC) VISIBLE,
  INDEX `leave_id_idx` (`leave_id` ASC) VISIBLE,
  CONSTRAINT `project_id`
    FOREIGN KEY (`project_id`)
    REFERENCES `HRMS_EDITED`.`projects` (`project_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `leave_id`
    FOREIGN KEY (`leave_id`)
    REFERENCES `HRMS_EDITED`.`leave` (`leave_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HRMS_EDITED`.`atten_regularization`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HRMS_EDITED`.`atten_regularization` (
  `atten_reg_id` INT NOT NULL AUTO_INCREMENT,
  `atten_id` INT NOT NULL,
  `correction_date` DATE NOT NULL,
  `previous_time` DATETIME NOT NULL,
  `updated_time` DATETIME NOT NULL,
  `update_reason` VARCHAR(500) NOT NULL,
  `update_status` TINYINT NOT NULL,
  PRIMARY KEY (`atten_reg_id`),
  UNIQUE INDEX `atten_reg_id_UNIQUE` (`atten_reg_id` ASC) VISIBLE,
  INDEX `atten_id_idx` (`atten_id` ASC) VISIBLE,
  CONSTRAINT `atten_id`
    FOREIGN KEY (`atten_id`)
    REFERENCES `HRMS_EDITED`.`attendance` (`atten_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
