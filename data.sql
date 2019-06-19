/*
 Navicat Premium Data Transfer

 Source Server         : Dung
 Source Server Type    : MySQL
 Source Server Version : 100132
 Source Host           : localhost:3306
 Source Schema         : data

 Target Server Type    : MySQL
 Target Server Version : 100132
 File Encoding         : 65001

 Date: 19/06/2019 13:44:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for loaisp
-- ----------------------------
DROP TABLE IF EXISTS `loaisp`;
CREATE TABLE `loaisp`  (
  `Maloaisp` int(255) NOT NULL,
  `Tenloaisp` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Maloaisp`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of loaisp
-- ----------------------------
INSERT INTO `loaisp` VALUES (1, 'Clothing');
INSERT INTO `loaisp` VALUES (2, 'Toys');
INSERT INTO `loaisp` VALUES (3, 'Milk');
INSERT INTO `loaisp` VALUES (4, 'Shampoo');

-- ----------------------------
-- Table structure for sanpham
-- ----------------------------
DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham`  (
  `Masp` int(255) NOT NULL,
  `Tensp` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `Loaisp` int(255) NULL DEFAULT NULL,
  `Giasp` int(255) NULL DEFAULT NULL,
  `Image` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Masp`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES (1, 'Cat Blue', 1, 100, '1.jpeg');
INSERT INTO `sanpham` VALUES (2, 'Elephant Blue', 1, 200, '2.jpeg');
INSERT INTO `sanpham` VALUES (3, 'Shits Gray', 1, 50, '3.jpeg');
INSERT INTO `sanpham` VALUES (4, 'Bear Gray', 1, 300, '4.jpeg');
INSERT INTO `sanpham` VALUES (5, 'Dinosaurs Gray', 1, 150, '5.jpeg');
INSERT INTO `sanpham` VALUES (6, 'Stuffed Dog', 2, 80, '6.jpeg');
INSERT INTO `sanpham` VALUES (7, 'Toy Mixed', 2, 100, '7.jpeg');
INSERT INTO `sanpham` VALUES (8, 'Suffe Toy', 2, 80, '8.jpeg');
INSERT INTO `sanpham` VALUES (9, 'Toy Rings ', 2, 100, '9.jpeg');
INSERT INTO `sanpham` VALUES (10, 'Cars Toy', 2, 150, '10.jpeg');
INSERT INTO `sanpham` VALUES (11, 'NiDo Milk', 3, 200, '11.jpeg');
INSERT INTO `sanpham` VALUES (12, 'Soa Milk', 3, 200, '12.jpeg');
INSERT INTO `sanpham` VALUES (13, 'Nan Milk', 3, 100, '13.jpeg');
INSERT INTO `sanpham` VALUES (14, 'ThaiLand Milk', 3, 100, '14.jpeg');
INSERT INTO `sanpham` VALUES (15, 'Gerber Milk', 3, 100, '15.jpeg');
INSERT INTO `sanpham` VALUES (16, 'Aquaphor', 4, 150, '16.jpeg');
INSERT INTO `sanpham` VALUES (17, 'Muga Baby', 4, 200, '17.jpeg');
INSERT INTO `sanpham` VALUES (18, 'Burts Bees Baby', 4, 200, '18.jpeg');
INSERT INTO `sanpham` VALUES (19, 'Earths ', 4, 150, '19.jpeg');
INSERT INTO `sanpham` VALUES (20, 'Jonson baby', 4, 300, '20.jpeg');

SET FOREIGN_KEY_CHECKS = 1;
