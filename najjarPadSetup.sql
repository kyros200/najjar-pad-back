create database najjarPad;

CREATE TABLE pad (
    id_pad int primary key auto_increment,
    name varchar(255),
    markdown varchar(255),
    id_pad_father int
);

alter table pad
add foreign key (id_pad_father) references pad(id_pad);

-- drop table pad;

-- select * from pad;