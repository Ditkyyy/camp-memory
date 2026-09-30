/* ==========================================================
   CAMP MEMORY BOOK — script.js
   ----------------------------------------------------------
   ไฟล์นี้แบ่งเป็นหมวด ส่วนที่ "แก้ไขได้" อยู่ด้านบน
   ส่วน "ระบบ" อยู่ด้านล่าง (ปกติไม่ต้องแก้)
   ========================================================== */


/* ==========================================================
   ▼▼▼  ส่วนที่แก้ไขได้  ▼▼▼
   ========================================================== */


/* ===============================
   TEAM DATA
   ข้อมูลการ์ดทีมในหน้า "แต่ละทีม"
   - name   : ชื่อทีม
   - image  : รูปทีม (assets/images/teams/...)
   (จำนวนสมาชิกนับอัตโนมัติจาก TEAM MEMBER DATA ด้านล่าง)
   - badge  : ป้ายเล็กๆ บนการ์ด (ไม่ใช้ให้ใส่ "")
   - id     : ห้ามแก้ (ใช้ผูกสีทีมใน CSS และโฟลเดอร์รูปสมาชิก)
   =============================== */

const teams = [
    {
        id: "yellow",
        name: "ທີມສີເຫຼືອງ",
        image: "assets/images/teams/yellow.jpg",
        badge: ""
    },
    {
        id: "red",
        name: "ທີມສີແດງ",
        image: "assets/images/teams/red.jpg",
        badge: ""
    },
    {
        id: "blue",
        name: "ທີມສີຟ້າ",
        image: "assets/images/teams/blue.jpg",
        badge: ""
    },
    {
        id: "green",
        name: "ທີມສີຂຽວ",
        image: "assets/images/teams/green.jpg",
        badge: ""
    },
    {
        id: "team-color-thon-dai",
        name: "ທີມສີທົນໄດ້",
        image: "assets/images/teams/team-color-thon-dai.jpg",
        badge: "STAFF"
    }
];


/* ===============================
   TEAM MEMBER DATA
   ข้อมูลสมาชิกของแต่ละทีม
   - name   : ชื่อที่แสดงใต้รูป Polaroid
   - image  : รูปสมาชิก
   - message: ข้อความ "ໃນສາຍຕາຂອງພວກເຮົາ" (แสดงเมื่อกดที่รูป)
              เขียนไว้ระหว่างเครื่องหมาย ` ` (ปุ่มเดียวกับ ~ มุมซ้ายบนคีย์บอร์ด)
              กด Enter ขึ้นบรรทัดใหม่ได้เลย / ยังไม่เขียนให้ปล่อยว่าง ``
   - contact: ลิงก์ติดต่อ 1 ลิงก์ (Facebook / Instagram / TikTok /
              WhatsApp / LINE / Telegram ...) เว็บจะเลือกไอคอนให้เอง
              ใส่เบอร์โทรอย่างเดียว เช่น "020 5555 1234" = ปุ่ม WhatsApp
              ไม่มีลิงก์ให้ปล่อยว่าง "" (ปุ่มจะซ่อนเอง)

   ตัวอย่าง:
        {
            name: "Aot",
            image: "assets/images/team-color-thon-dai/member-01.jpg",
            message: `ເປັນຄົນທີ່ເຮັດໃຫ້ທຸກຄົນຫົວໄດ້ສະເໝີ
ຂອບໃຈທີ່ມາເປັນໝູ່ກັນເດີ້`,
            contact: "https://www.facebook.com/aot.example"
        },
   เพิ่ม/ลบสมาชิกได้โดยเพิ่ม/ลบ { ... } ในทีมนั้น
   (อย่าลืมใส่ , คั่นระหว่างแต่ละคน)
   =============================== */

const teamMembers = {

    yellow: [
        {
            name: "Da Da",
            image: "assets/images/yellow/member-01.jpg",
            message: `ເປັນຄົນທີ່ເບິ່ງຄືຈະຂີ້ອາຍ ແຕ່ພໍໄດ້ມາຮູ້ຈກກັນ ລາວກະຄ່ອນຂ້າງເຟຣນລີ່ເລີຍລະ`,
            contact: "https://www.instagram.com/dxia_888?stkn=djAycHV2NTRkZGhr"
        },
        {
            name: "Diddy",
            image: "assets/images/yellow/member-02.jpg",
            message: `ຂ້າພະເຈົ້າເອງງ ຖ້າຢາກຟັງເຂົາຮ້ອງເພງ ສາມາດໄປເບິ່ງໄດ້ໃນ tiktok: ອາຫວັງ 2`,
            contact: "https://www.instagram.com/dy_nyx05?stkn=MTM1MjlvZ3JxbWx6bQ%3D%3D&utm_source=qr"
        },
        {
            name: "Kham Fam",
            image: "assets/images/yellow/member-03.jpg",
            message: `ເປັນນ້ອງຊາຍອີກຄົນທີ່ຢູ່ນຳກະມ່ວນຫຼິ້ນມຸກຕົບມຸກນຳກັນໄດ້`,
            contact: "https://www.instagram.com/kam673976?stkn=Z2c3c2dpdjFwc2ts"
        },
        {
            name: "Khamfour",
            image: "assets/images/yellow/member-04.jpg",
            message: `ເປັນນ້ອງຊາຍທີ່ຫຼິ້ນນຳແລ້ວມ່ວນຢູ່ນຳແລ້ວບໍ່ມີເບື່ອ`,
            contact: "https://www.facebook.com/share/1F7Dwo1hJw/?mibextid=wwXIfr"
        },
        {
            name: "Nang",
            image: "assets/images/yellow/member-05.jpg",
            message: `ເປັນເອື້ອຍທີ່ເຖິງວ່າຈະບໍ່ຄ່ອຍໄດ້ເວົ້າຫຍັງນຳກນຫຼາຍ ແຕ່ລາວກະເປັນຄົນເຮຮາໃນລະດັບໜື່ງ`,
            contact: "https://www.facebook.com/share/1Fzb5ioVuV/?mibextid=wwXIfr"
        },
        {
            name: "Payong",
            image: "assets/images/yellow/member-06.jpg",
            message: `ຕອນເຫັນຄັ້ງແລກຄິດວ່າລາວສິເປັນຄົນງຽບໆ ແຕ່ພໍໄດ້ມາຮູ້ຈັກກັນຫຼາຍຂື້ນລາວເປັນຄົນທີ່ເຂົ້າກັບຄົນງ່າຍເລີຍ`,
            contact: "https://www.facebook.com/share/18FFNviEDs/?mibextid=wwXIfr"
        },
        {
            name: "Phim jai",
            image: "assets/images/yellow/member-07.jpg",
            message: `ເປັນແມ່ຄົວປະຈຳທີມເລີຍ ເຮັດອາຫານແຕ່ລະຢ່າງອອກມາແຊບເລີຍທີດຽວ`,
            contact: "https://www.facebook.com/share/1QE9BVXD8D/?mibextid=wwXIfr"
        },
        {
            name: "Pouna",
            image: "assets/images/yellow/member-08.jpg",
            message: `ເທີເປັນໃຄອ່ະະ ຢອກກກກ ເປັນຄົນທີ່ຢູ່ນຳແລ້ວມ່ວນແບບຜິດປົກກະຕິ`,
            contact: "https://www.instagram.com/pounaxaiyhuk?stkn=ZnBnb2J4bHFjYXVx"
        },
        {
            name: "Taiy",
            image: "assets/images/yellow/member-09.jpg",
            message: `ເປັນເອື້ອຍທີ່ໜ້າຮັກຄົນໜື່ງ ທີ່ຊັບພອດຄ່າວັດຖຸດິບນ້ອງໆ`,
            contact: "https://www.facebook.com/share/1EmNQFmwjh/?mibextid=wwXIfr"
        }
    ],

    red: [
        {
            name: "Aum",
            image: "assets/images/red/member-01.jpg",
            message: `ເປັນຄົນທີ່ເບິ່ງຊົງຈະ introvert ແຕ່ກະຍິນດີທີ່ໄດ້ຮູ້ຈັກນ້າ`,
            contact: "https://www.facebook.com/share/1CVk8cRzDZ/?mibextid=wwXIfr"
        },
        {
            name: "Fah",
            image: "assets/images/red/member-02.jpg",
            message: `ເປັນຄົນທີ່ເປັນກັນເອງ ເຂົ້າກັບຄົນອື່ນໄດ້ງ່າຍ ແຕ່ເສຍດາຍທີ່ບໍ່ທັນໄດ້ທຳຄວາມຮູ້ຈັກກັນຫລາຍກວ່ານີ້`,
            contact: "https://www.facebook.com/share/1HnjgRpfGk/?mibextid=wwXIfr"
        },
        {
            name: "Kookkik",
            image: "assets/images/red/member-03.jpg",
            message: `ເປັນຄົນງຽບໆ ສະຫງົບໆ ແຕ່ກະເຟຣນລີ່ນະ ເປັນໜື່ງໃນຜູ້ທີ່ບໍ່ໄດ້ນອນ`,
            contact: "https://www.facebook.com/share/19eH2spbgK/?mibextid=wwXIfr"
        },
        {
            name: "Korn",
            image: "assets/images/red/member-04.jpg",
            message: `ເປັນຊາຍຜູ້ introvert ເຖິງວ່າລາວສິເປັນຄົນບໍ່ຄ່ອຍເວົ້າ ແຕ່ລາວເຂົ້າກັບຄົນໄດ້ງ່າຍ`,
            contact: "https://www.facebook.com/share/19ejg6fWz8/?mibextid=wwXIfr"
        },
        {
            name: "Koungnang",
            image: "assets/images/red/member-05.jpg",
            message: `ເປັນຄົນທີ່ເຖິງຈະບໍ່ຄ່ອຍໄດ້ທຳຄວາມຮູ້ຈັກນຳ ແຕ່ໂຕລາວຕາມທີ່ເຫັນເປັນຄົນທີ່ເຂົ້າກັບຄົນງ່າຍ ແລະ ມັກມ່ວນ`,
            contact: "https://www.facebook.com/share/1E1bhqHSd8/?mibextid=wwXIfr"
        },
        {
            name: "Levi",
            image: "assets/images/red/member-06.jpg",
            message: `ເປັນມືກີຕ້າທີ່ໂຄດເທບເລີຍ ຖ້າມີໂອກາດຢາກ ຢາກຈະຮ້ອງເພງໃຫ້ຫຼິ້ນກີຕ້າອີກ`,
            contact: "https://www.facebook.com/share/1MsNptB2uK/?mibextid=wwXIfr"
        },
        {
            name: "Mine mind",
            image: "assets/images/red/member-07.jpg",
            message: `ເປັນຄົນທີ່ຫນ້າຮັກ ຊ່ວງແລກອາດຈະງຽບໆແນ່ ແຕ່ພໍໄດ້ຮູ້ຈັກກັນ ໄດ້ຮ້ອງເພງນຳກັນມັນດີ ແລະ ເປັນໜື່ງໃນຄົນທີ່ບໍ່ນອນ`,
            contact: "https://www.facebook.com/share/1819B8oExo/?mibextid=wwXIfr"
        },
        {
            name: "Nam",
            image: "assets/images/red/member-08.jpg",
            message: `ເປັນນ້ອງອີກຄົນທີ່ຄ່ອນຂ້າງລ່າເລີງດີ ແລະ ມັກເກືອຂະໜົມໝູ່`,
            contact: "https://www.facebook.com/share/19b7QA2cGo/?mibextid=wwXIfr"
        },
        {
            name: "Tolee",
            image: "assets/images/red/member-09.jpg",
            message: `ເປັນຄົນທີ່ຄ່ອນຂ້າງງາມ ແລະ ຫນ້າຮັກເລີຍ ເປັນຄົນທີ່ເຂົ້າກັບຄົນງ່າຍ ມັກຖ່າຍຮູບ ຕອນດ່າກະເປັນຕາຢ້ານຢູ່ດອກ ແຕ່ບໍ່ວ່າຫຍັງ`,
            contact: "https://www.facebook.com/share/19btEXAquq/?mibextid=wwXIfr"
        }
    ],

    blue: [
        {
            name: "Aom sod",
            image: "assets/images/blue/member-01.jpg",
            message: `ເປັນນ້ອງທີ່ມີຄວາມເປັນຜູ້ໃຫຍ່ສູງ ອາດຈະເວົ້າໜ້ອຍໆ ແຕ່ໂສດເດີ້ຜູ້ນິ`,
            contact: "https://www.facebook.com/share/14v6otVFmRk/?mibextid=wwXIfr"
        },
        {
            name: "Fino (Black wev 150)",
            image: "assets/images/blue/member-02.jpg",
            message: `ເປັນຄົນທີ່ຊ່ວງແລກຄິດວ່າສິບໍໄດ້ເວົ້າກັບລາວແລ້ວ ແຕ່ພໍໄດ້ມາຮູ້ຈັກກັນໄດ້ກິນນຳມ່ວນຊື່ນ ກະເຮັດໃຫ້ເຮົາໄດ້ຮູ້ຈັກກັບລາວຫຼາຍຂື້ນ`,
            contact: "https://www.instagram.com/fino.ez4?stkn=MXhzOXl5MzR3b2lydw=="
        },
        {
            name: "Golden Fish",
            image: "assets/images/blue/member-03.jpg",
            message: `ເປັນເອື້ອຍທີ່ຄ່ອນຂ້າງເຟຣນລີ່ ນິໄສດີ ແລະ ເປັນກັນເອງ`,
            contact: "https://www.facebook.com/share/18VpVqUYvF/?mibextid=wwXIfr"
        },
        {
            name: "Lee",
            image: "assets/images/blue/member-04.jpg",
            message: `ເປັນຄົນແລກທີ່ເຫັນໃນຄາລະວານຕອນຜະລິດສື່ ແລ້ວເບິ່ງຄືລາວເປັນຄົນຄ່ອນຂ້າງຕັ້ງໃຈໃນວຽກງານ`,
            contact: "https://www.facebook.com/share/1EtJWUwoip/?mibextid=wwXIfr"
        },
        {
            name: "MoMo",
            image: "assets/images/blue/member-05.jpg",
            message: `ເປັນນ້ອງທີ່ຄ່ອນຂ້າງເວົ້າໜ້ອຍ ມີຂະໜົມຕິດຖົງຕະຫຼອດເວລາ ແລະ ມັກເອົາມາເກືອໝູ່`,
            contact: "https://www.instagram.com/narinhug?stkn=djZ5d2c4a3NxN29u"
        },
        {
            name: "Noy",
            image: "assets/images/blue/member-06.jpg",
            message: `ເປັນນ້ອງທີ່ເກັ່ງຮັບຜິດຊອບຕໍ່ຫນ້າທີ່ເປັນກັນເອງ ນິໄສໜ້າຮັກ ຖ້າບໍ່ສິແຕກແອວກໍຮໍ`,
            contact: " https://www.facebook.com/share/18SN8DnYcg/?mibextid=wwXIfr"
        },
        {
            name: "Pavina",
            image: "assets/images/blue/member-07.jpg",
            message: `ເປັນຄົນທີ່ນິໄສໜ້າຮັກເປັນກັນເອງ ແຕ່ເສຍດາຍທີ່ບໍ່ໄດ້ຢູ່ຮ່ວມແຄ້ມໄຟນຳກັນ`,
            contact: "https://www.instagram.com/pa_viinaaaaaa?stkn=MWozajB1c2ZiYXN5aQ=="
        },
        {
            name: "Songkran",
            image: "assets/images/blue/member-08.jpg",
            message: `ເປັນຄົນທີ່ມັກມ່ວນ ເຮຮາ ຢູ່ກັບໃຜກະມ່ວນໄດ້`,
            contact: "https://www.instagram.com/4_sxngkarn?stkn=MTM3NzhqOWM3YXo1Nw=="
        }
    ],

    green: [
        {
            name: "Aeh",
            image: "assets/images/green/member-01.jpg",
            message: `ເປັນຄົນທີ່ເຫັນຄັ້ງແລກຄືສິເປັນຄົນຂີ້ອາຍບໍ່ກ້າເວົ້າ ແຕ່ພໍເຫຼົ້ນເຂົ້າປາກແລ້ວ ກະຮ້ອງເພງມ່ວນທັນທີ`,
            contact: "https://www.facebook.com/share/19UpNqp8Kq/?mibextid=wwXIfr"
        },
        {
            name: "Anouk",
            image: "assets/images/green/member-02.jpg",
            message: `ເປັນຄົນທີ່ເປັນກັນເອງ ເຖິງຈະບໍ່ຄ່ອຍໄດ້ເວົ້ານຳກັນ ແຕ່ກະຢາກໃຫ້ຮູ້ຈັກກັນໃຫ້ຫຼາຍກວ່ານີ້ ຖ້າມີເວລາ`,
            contact: "https://www.instagram.com/anouk__07?stkn=Z3F0eng0aGF5N3Qw"
        },
        {
            name: "Carrie",
            image: "assets/images/green/member-03.jpg",
            message: `ເປັນຄົນທີ່ເສັ້ນຕື້ນທີ່ສຸດໃນຄາລະວານ ບໍ່ວ່າສິເປັນຈັງໃດ ລາວກະສາມາດຫົວໄດ້`,
            contact: "https://www.facebook.com/share/1Bzz3gvfSd/?mibextid=wwXIfr"
        },
        {
            name: "Chandai",
            image: "assets/images/green/member-04.jpg",
            message: `ເປັນຄົນທີ່ຂະຫຍັນຕໍ່ວຽກ ລ່າເລີງດີ ເຖິງຈະບໍ່ໄດ້ທຳຄວາມຮູ້ຈັກກັນຫຼາຍ`,
            contact: "https://www.facebook.com/share/1RCSxmSjem/?mibextid=wwXIfr"
        },
        {
            name: "Kaem yuii",
            image: "assets/images/green/member-05.jpg",
            message: `ເປັນນ້ອງທີ່ຄິດວ່າເປັນຝາແຝດກັບໂມເລີຍ ຄືກັນທຸກຢ່າງຕັ້ງແຕ່ມັກເກືອຂະໜົມໝູ່`,
            contact: "https://www.instagram.com/i.kaemmm?stkn=MTVxMnZpZ2x3c244"
        },
        {
            name: "karot",
            image: "assets/images/green/member-06.jpg",
            message: `ເປັນຕົວຄອນເທັ້ນຂອງຄາລະວານ ທີ່ເວລາໄດ້ບິນສຽງລາວຢູ່ໃສບ່ອນນັ້ນກາລັນຕີຄວາມມ່ວນ ຈິງໄດ້ສາຍາວ່າ"ອ້າຍກາສະລອງ"`,
            contact: "https://www.instagram.com/kalon_pinpon?stkn=eW5oYTVyNjc1c3Vp"
        },
        {
            name: "Lin lin",
            image: "assets/images/green/member-07.jpg",
            message: `ເປັນນ້ອງທີ່ເບິ່ງແລ້ວເປັນຕາອີຕົນ ຕົວນິດດຽວ ແຕ່ເຫັນແບກໂຕະຕັ່ງ T_T`,
            contact: "https://www.facebook.com/share/19vpKBwSpW/?mibextid=wwXIfr"
        },
        {
            name: "Mind",
            image: "assets/images/green/member-08.jpg",
            message: `ເປັນຄົນທີ່ເຫັນຄັ້ງແລກຄ່ອນຂ້າງຈະງຽບ ແຕ່ພໍມາໄດ້ຮູ້ຈັກກັນ ກໍຮູ້ເລີຍວ່າລາວເປັນຄົນຄ່ອນຂ້າງເຟຣນລີ່`,
            contact: "https://www.instagram.com/mgi_nyz?stkn=MXRocXUwaDNzOHpteg=="
        },
        {
            name: "Mr. Brian (Toon)",
            image: "assets/images/green/member-09.jpg",
            message: `ເປັນຄົນທີ່ມີຄວາມເປັນຜູ້ນຳສູງ ເລ່ນກີຕ້າໄດ້ ຮ້ອງເພງດີ ເທ້ເລີຍ`,
            contact: "https://www.facebook.com/share/1CNGce9veC/?mibextid=wwXIfr"
        }
    ],

    "team-color-thon-dai": [
        {
            name: "Aot",
            image: "assets/images/team-color-thon-dai/member-01.jpg",
            message: `ເປັນອ້າຍທີ່ໜ້າຮັກ ໜ້າເຄົາລົບ ມີຄວາມເປັນຜູ້ນຳສູງ ເຫຼ່ທໍ່`,
            contact: "https://www.facebook.com/share/1JMrNKXWcG/?mibextid=wwXIfr"
        },
        {
            name: "Noy",
            image: "assets/images/team-color-thon-dai/member-02.jpg",
            message: `ເປັນນ້ອງທີ່ເກັ່ງຮັບຜິດຊອບຕໍ່ຫນ້າທີ່ເປັນກັນເອງ ນິໄສໜ້າຮັກ ຖ້າບໍ່ສິແຕກແອວກໍຮໍ`,
            contact: "https://www.facebook.com/share/18SN8DnYcg/?mibextid=wwXIfr"
        },
        {
            name: "Chandai",
            image: "assets/images/team-color-thon-dai/member-03.jpg",
            message: `ເປັນຄົນທີ່ຂະຫຍັນຕໍ່ວຽກ ລ່າເລີງດີ ເຖິງຈະບໍ່ໄດ້ທຳຄວາມຮູ້ຈັກກັນຫຼາຍ`,
            contact: "https://www.facebook.com/share/1RCSxmSjem/?mibextid=wwXIfr"
        },
        {
            name: "Aom sod",
            image: "assets/images/team-color-thon-dai/member-04.jpg",
            message: `ເປັນນ້ອງທີ່ມີຄວາມເປັນຜູ້ໃຫຍ່ສູງ ອາດຈະເວົ້າໜ້ອຍໆ ແຕ່ໂສດເດີ້ຜູ້ນິ`,
            contact: "https://www.facebook.com/share/14v6otVFmRk/?mibextid=wwXIfr"
        },
        {
            name: "Khamphaeng",
            image: "assets/images/team-color-thon-dai/member-05.jpg",
            message: `ເຖິງຈະບໍ່ຄ່ອຍສະໜິດຄືກັບຄົນອື່ນຫຼາຍ ແຕ່ຍິນດີທີ່ໄດ້ຮູ້ຈັກ`,
            contact: "https://www.instagram.com/k.pm_m?stkn=YXBuY25peTlkMHRp"
        },
        {
            name: "Lin lin",
            image: "assets/images/team-color-thon-dai/member-06.jpg",
            message: `ເປັນນ້ອງທີ່ເບິ່ງແລ້ວເປັນຕາອີຕົນ ຕົວນິດດຽວ ແຕ່ເຫັນແບກໂຕະຕັ່ງ T_T`,
            contact: "https://www.facebook.com/share/19vpKBwSpW/?mibextid=wwXIfr"
        },
        {
            name: "Eingeing",
            image: "assets/images/team-color-thon-dai/member-07.jpg",
            message: `ເປັນນ້ອງທີ່ມີເອເນຈີ້ສູງ ມີຄວາມລ່າເລີງສົດໃສ ໄປຢູ່ໃສກະບໍ່ເຫງົາ`,
            contact: "https://www.facebook.com/share/1BQc2hDorE/?mibextid=wwXIfr"
        },
        {
            name: "Khamfour",
            image: "assets/images/team-color-thon-dai/member-08.jpg",
            message: `ເປັນນ້ອງຊາຍທີ່ຫຼິ້ນນຳແລ້ວມ່ວນຢູ່ນຳແລ້ວບໍ່ມີເບື່ອ`,
            contact: "https://www.facebook.com/share/1F7Dwo1hJw/?mibextid=wwXIfr"
        },
        {
            name: "Johnney",
            image: "assets/images/team-color-thon-dai/member-09.jpg",
            message: `ເປັນຕາກ້ອງເບີຕົ້ນໆຂອງຄາລະວານ ແລະ ເປັນອ້າຍທີ່ໜ້າຮັກຄົນໜື່ງ`,
            contact: "https://www.facebook.com/share/19osuL4ULQ/?mibextid=wwXIfr"
        }
    ]

};


/* ===============================
   MEMORY GALLERY
   รูปทั้งหมดของค่าย (รวมใน Gallery เดียว)
   - image  : ไฟล์รูปใน assets/images/memories/
   - caption: คำบรรยายสั้นๆ (ไม่ต้องการให้ใส่ "")
   เพิ่มรูป: คัดลอกบรรทัดแล้วเปลี่ยนเลขไฟล์ (อย่าลืม , ท้ายบรรทัด)
   =============================== */

const memoryImages = [
    { image: "assets/images/memories/memory-01.jpg", caption: "" },
    { image: "assets/images/memories/memory-02.jpg", caption: "" },
    { image: "assets/images/memories/memory-03.jpg", caption: "" },
    { image: "assets/images/memories/memory-04.jpg", caption: "" },
    { image: "assets/images/memories/memory-05.jpg", caption: "" },
    { image: "assets/images/memories/memory-06.jpg", caption: "" },
    { image: "assets/images/memories/memory-07.jpg", caption: "" },
    { image: "assets/images/memories/memory-08.jpg", caption: "" },
    { image: "assets/images/memories/memory-09.jpg", caption: "" },
    { image: "assets/images/memories/memory-10.jpg", caption: "" },
    { image: "assets/images/memories/memory-11.jpg", caption: "" }
];


/* ==========================================================
   ▼▼▼  ส่วนระบบ (ปกติไม่ต้องแก้)  ▼▼▼
   ========================================================== */

(function () {
    "use strict";

    /* ===============================
       IMAGE PLACEHOLDER
       ถ้าไฟล์รูปยังไม่มี จะแสดงกรอบพร้อมชื่อไฟล์ที่ต้องใส่
       แทนไอคอนรูปเสีย เมื่อใส่รูปจริงแล้วกรอบจะหายเอง
       =============================== */

    function markMissingImage(img) {
        var holder = img.parentElement;
        if (!holder || holder.classList.contains("img-missing")) return;

        var path = img.getAttribute("src") || "";
        var fileName = path.split("/").pop();

        holder.classList.add("img-missing");
        holder.setAttribute("data-missing", fileName);
        holder.setAttribute("title", path);
    }

    // ดักจับรูปที่โหลดไม่สำเร็จ (รวมถึงรูปที่ JS สร้างใน Phase ถัดไป)
    document.addEventListener("error", function (event) {
        var target = event.target;
        if (target && target.tagName === "IMG" && !target.closest(".lightbox, .member-modal")) {
            markMissingImage(target);
        }
    }, true);

    // เช็กรูปที่โหลดพลาดไปก่อนสคริปต์นี้ทำงาน
    function checkExistingImages() {
        var images = document.querySelectorAll("img");
        images.forEach(function (img) {
            if (img.complete && img.naturalWidth === 0 && img.getAttribute("src") && !img.closest(".lightbox, .member-modal")) {
                markMissingImage(img);
            }
        });
    }


    /* ===============================
       PAGE VIEWS (ระบบสลับหน้า)
       กดเมนูแล้วแสดงทีละหน้า ตาม #id ใน URL
       - ปุ่ม Back ของเบราว์เซอร์ใช้ได้
       - ส่งลิงก์ เช่น .../index.html#teams ให้เพื่อนเปิดตรงหน้านั้นได้
       =============================== */

    var DEFAULT_VIEW = "home";
    var views = document.querySelectorAll(".view");
    var navLinks = document.querySelectorAll(".nav-list a");

    var TEAM_PREFIX = "team-";
    var BASE_TITLE = document.title;

    function getViewId() {
        var id = decodeURIComponent(window.location.hash.replace("#", ""));

        // หน้าสมาชิกของทีม เช่น #team-yellow
        if (id.indexOf(TEAM_PREFIX) === 0 && findTeam(id.slice(TEAM_PREFIX.length))) {
            renderTeamMembers(id.slice(TEAM_PREFIX.length));
            return "team-members";
        }

        var target = id && document.getElementById(id);
        return target && target.classList.contains("view") ? id : DEFAULT_VIEW;
    }

    function showView(id, shouldScroll) {
        if (id !== "team-members") document.title = BASE_TITLE;

        // บางหน้าย่อยให้ไฮไลต์เมนูหลักแทน (เช่น หน้าสมาชิก → "แต่ละทีม")
        var activeView = document.getElementById(id);
        var navId = (activeView && activeView.getAttribute("data-nav")) || id;

        views.forEach(function (view) {
            var isActive = view.id === id;
            view.classList.toggle("is-active", isActive);
            view.setAttribute("aria-hidden", isActive ? "false" : "true");
        });

        navLinks.forEach(function (link) {
            var isActive = link.getAttribute("href") === "#" + navId;
            link.classList.toggle("is-active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "page");
                // มือถือ: เลื่อนแถบเมนูให้เห็นเมนูที่เลือก
                var nav = link.closest(".main-nav");
                if (nav && nav.scrollWidth > nav.clientWidth) {
                    nav.scrollTo({
                        left: link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2,
                        behavior: "smooth"
                    });
                }
            } else {
                link.removeAttribute("aria-current");
            }
        });

        if (shouldScroll) {
            window.scrollTo({ top: 0, behavior: "auto" });
        }
    }

    function initViews() {
        if (!views.length) return;
        document.documentElement.classList.add("js");

        // ป้องกันเบราว์เซอร์กระโดดไปตำแหน่ง #id เอง
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        showView(getViewId(), true);

        window.addEventListener("hashchange", function () {
            showView(getViewId(), true);
        });
    }


    /* ===============================
       MUSIC PLAYER
       กดเพื่อ Play / Pause (ไม่มี Autoplay)
       =============================== */

    function initMusic() {
        var btn = document.getElementById("music-btn");
        var status = document.getElementById("music-status");
        var audio = document.getElementById("bg-music");
        if (!btn || !status || !audio) return;

        function setState(state) {
            var isPlaying = state === "playing";
            btn.classList.toggle("is-playing", isPlaying);
            btn.classList.toggle("is-unavailable", state === "missing");
            btn.setAttribute("aria-pressed", isPlaying ? "true" : "false");
            btn.setAttribute("aria-label", isPlaying ? "ຫຍຸດເພງ" : "ຫຼິ້ນເພງ");

            if (state === "playing") status.textContent = "Playing";
            else if (state === "missing") status.textContent = "ຍັງບໍ່ມີເພງ";
            else status.textContent = "Paused";
        }

        btn.addEventListener("click", function () {
            if (audio.paused) {
                var playPromise = audio.play();
                if (playPromise && typeof playPromise.catch === "function") {
                    playPromise.catch(markMissing);
                }
            } else {
                audio.pause();
            }
        });

        // ถ้าหาไฟล์เพลงไม่เจอ จะแสดง "ยังไม่มีเพลง" ค้างไว้
        var isMissing = false;

        function markMissing() {
            isMissing = true;
            setState("missing");
        }

        audio.addEventListener("playing", function () {
            isMissing = false;
            setState("playing");
        });
        audio.addEventListener("pause", function () {
            if (!isMissing) setState("paused");
        });
        audio.addEventListener("error", markMissing);

        setState("paused");
    }


    /* ===============================
       TEAM OVERVIEW
       สร้างการ์ดทีมจาก TEAM DATA ด้านบน
       =============================== */

    function escapeHTML(text) {
        return String(text).replace(/[&<>"']/g, function (ch) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
        });
    }

    function getMemberCount(teamId) {
        var list = typeof teamMembers !== "undefined" && teamMembers[teamId];
        return list ? list.length : 0;
    }

    function findTeam(teamId) {
        for (var i = 0; i < teams.length; i++) {
            if (teams[i].id === teamId) return teams[i];
        }
        return null;
    }

    function renderTeamOverview() {
        var container = document.getElementById("team-overview");
        if (!container || typeof teams === "undefined") return;

        container.innerHTML = teams.map(function (team) {
            var badge = team.badge
                ? '<span class="team-badge">' + escapeHTML(team.badge) + "</span>"
                : "";

            return (
                '<article class="team-card" data-team="' + escapeHTML(team.id) + '">' +
                    '<span class="team-flag" aria-hidden="true"></span>' +
                    badge +
                    '<figure class="team-card__photo">' +
                        '<img src="' + escapeHTML(team.image) + '" alt="ຮູບ' + escapeHTML(team.name) + '" loading="lazy">' +
                    "</figure>" +
                    '<h3 class="team-card__name">' + escapeHTML(team.name) + "</h3>" +
                    '<p class="team-card__count">ສະມາຊິກ <strong>' + getMemberCount(team.id) + "</strong> ຄົນ</p>" +
                    '<a href="#team-' + escapeHTML(team.id) + '" class="team-btn">ເບິ່ງສະມາຊິກ →</a>' +
                "</article>"
            );
        }).join("");
    }


    /* ===============================
       TEAM MEMBERS (Polaroid)
       สร้างหน้าสมาชิกของทีมที่เลือก จาก TEAM MEMBER DATA
       =============================== */

    // มุมเอียง / ระยะเยื้อง / Doodle ของแต่ละใบ (วนซ้ำ ทำให้ไม่ตรงเป๊ะเหมือน Grid)
    var TILTS = [-3, 2, -1.5, 3, -2.5, 1.5, 2.5, -2, 1, -3.5];
    var SHIFTS = [0, 10, -4, 6, 12, -2, 4, -6, 8, 2];
    var DOODLES = ["i-heart", "", "i-star", "", "", "i-flower", "", "i-leaf", "", ""];

    function renderTeamMembers(teamId) {
        var team = findTeam(teamId);
        var section = document.getElementById("team-members");
        var grid = document.getElementById("member-grid");
        var title = document.getElementById("team-page-title");
        var count = document.getElementById("team-page-count");
        if (!team || !section || !grid) return;

        var members = teamMembers[teamId] || [];

        section.setAttribute("data-team", team.id);
        title.textContent = team.name;
        count.textContent = "ສະມາຊິກ " + members.length + " ຄົນ";
        document.title = team.name + " — Camp Memory Book";

        grid.innerHTML = members.map(function (member, i) {
            var doodle = DOODLES[i % DOODLES.length];
            var doodleHTML = doodle
                ? '<svg class="member__doodle" aria-hidden="true"><use href="#' + doodle + '"/></svg>'
                : "";

            return (
                '<button type="button" class="polaroid member" data-index="' + i + '" ' +
                    'aria-label="ອ່ານຂໍ້ຄວາມເຖິງ ' + escapeHTML(member.name) + '" ' +
                    'style="' +
                    "--tilt:" + TILTS[i % TILTS.length] + "deg;" +
                    "--shift:" + SHIFTS[i % SHIFTS.length] + "px;" +
                    "--i:" + i + '">' +
                    '<span class="tape tape--top" aria-hidden="true"></span>' +
                    '<span class="polaroid__img">' +
                        '<img src="' + escapeHTML(member.image) + '" alt="" loading="lazy">' +
                    "</span>" +
                    '<span class="polaroid__caption">' + escapeHTML(member.name) + "</span>" +
                    '<span class="member__hint" aria-hidden="true">💌</span>' +
                    doodleHTML +
                "</button>"
            );
        }).join("");

        memberModal.teamId = team.id;
    }


    /* ===============================
       MEMORY GALLERY
       สร้างรูป Polaroid จาก MEMORY GALLERY ด้านบน
       =============================== */

    var GALLERY_TILTS = [-2.5, 2, -1, 3, -3, 1.5, 2.5, -2, 1, -1.5, 3, -2.8];
    var GALLERY_DOODLES = ["", "i-heart", "", "", "i-star", "", "", "i-flower", "", "i-leaf", "", ""];

    function renderGallery() {
        var grid = document.getElementById("memory-gallery");
        if (!grid || typeof memoryImages === "undefined") return;

        grid.innerHTML = memoryImages.map(function (item, i) {
            var caption = item.caption || "";
            var doodle = GALLERY_DOODLES[i % GALLERY_DOODLES.length];
            var doodleHTML = doodle
                ? '<svg class="memory__doodle" aria-hidden="true"><use href="#' + doodle + '"/></svg>'
                : "";

            return (
                '<button type="button" class="polaroid memory" data-index="' + i + '" ' +
                    'aria-label="ເບິ່ງຮູບໃຫຍ່' + (caption ? ": " + escapeHTML(caption) : " ຮູບທີ່ " + (i + 1)) + '" ' +
                    'style="--tilt:' + GALLERY_TILTS[i % GALLERY_TILTS.length] + "deg;--i:" + (i % 12) + '">' +
                    '<span class="tape tape--top" aria-hidden="true"></span>' +
                    '<span class="polaroid__img">' +
                        '<img src="' + escapeHTML(item.image) + '" alt="" loading="lazy">' +
                    "</span>" +
                    '<span class="polaroid__caption">' + escapeHTML(caption) + "</span>" +
                    doodleHTML +
                "</button>"
            );
        }).join("");

        grid.addEventListener("click", function (event) {
            var card = event.target.closest(".memory");
            if (card) openLightbox(Number(card.getAttribute("data-index")));
        });
    }


    /* ===============================
       LIGHTBOX
       - ปุ่ม ‹ › ✕ / คีย์บอร์ด ← → Esc
       - มือถือ: ปัดซ้าย-ขวาเพื่อเปลี่ยนรูป
       =============================== */

    var lightbox = {
        index: 0,
        lastFocus: null
    };

    function lbEl(id) {
        return document.getElementById(id);
    }

    function showLightboxImage(index) {
        var total = memoryImages.length;
        if (!total) return;

        lightbox.index = (index + total) % total;   // วนรอบ: รูปสุดท้าย → รูปแรก
        var item = memoryImages[lightbox.index];
        var img = lbEl("lightbox-img");
        var figure = lbEl("lightbox-figure");

        figure.classList.remove("is-missing", "is-changing");
        void figure.offsetWidth;                     // เริ่มแอนิเมชันใหม่ทุกครั้งที่เปลี่ยนรูป
        figure.classList.add("is-changing");

        img.parentElement.setAttribute("data-missing", item.image.split("/").pop());
        img.src = item.image;
        img.alt = item.caption || "ພາບຄວາມຊົງຈຳ " + (lightbox.index + 1);
        lbEl("lightbox-caption").textContent = item.caption || "";
        lbEl("lightbox-counter").textContent = (lightbox.index + 1) + " / " + total;
    }

    function openLightbox(index) {
        var box = lbEl("lightbox");
        if (!box) return;

        lightbox.lastFocus = document.activeElement;
        showLightboxImage(index);
        box.hidden = false;
        document.documentElement.classList.add("is-locked");   // หยุดการเลื่อนหน้าเว็บด้านหลัง

        requestAnimationFrame(function () {
            box.classList.add("is-open");
        });
        lbEl("lightbox-close").focus();
    }

    function closeLightbox() {
        var box = lbEl("lightbox");
        if (!box || box.hidden) return;

        box.classList.remove("is-open");
        document.documentElement.classList.remove("is-locked");
        setTimeout(function () {
            box.hidden = true;
        }, 250);

        if (lightbox.lastFocus && typeof lightbox.lastFocus.focus === "function") {
            lightbox.lastFocus.focus();
        }
    }

    function initLightbox() {
        var box = lbEl("lightbox");
        if (!box) return;

        var img = lbEl("lightbox-img");
        var figure = lbEl("lightbox-figure");

        lbEl("lightbox-close").addEventListener("click", closeLightbox);
        lbEl("lightbox-prev").addEventListener("click", function () { showLightboxImage(lightbox.index - 1); });
        lbEl("lightbox-next").addEventListener("click", function () { showLightboxImage(lightbox.index + 1); });

        // กดพื้นที่มืดรอบรูปเพื่อปิด
        box.addEventListener("click", function (event) {
            if (event.target === box) closeLightbox();
        });

        // รูปยังไม่มี → แสดงชื่อไฟล์แทน
        img.addEventListener("error", function () {
            if (img.getAttribute("src")) figure.classList.add("is-missing");
        });
        img.addEventListener("load", function () {
            figure.classList.remove("is-missing");
        });

        // คีย์บอร์ด
        document.addEventListener("keydown", function (event) {
            if (box.hidden) return;

            if (event.key === "Escape") {
                closeLightbox();
            } else if (event.key === "ArrowLeft") {
                showLightboxImage(lightbox.index - 1);
            } else if (event.key === "ArrowRight") {
                showLightboxImage(lightbox.index + 1);
            } else if (event.key === "Tab") {
                // วนโฟกัสอยู่ใน Lightbox
                var buttons = box.querySelectorAll("button");
                var first = buttons[0];
                var last = buttons[buttons.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        // มือถือ: ปัดซ้าย-ขวา
        var startX = 0;
        var startY = 0;

        box.addEventListener("touchstart", function (event) {
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
        }, { passive: true });

        box.addEventListener("touchend", function (event) {
            var dx = event.changedTouches[0].clientX - startX;
            var dy = event.changedTouches[0].clientY - startY;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                showLightboxImage(lightbox.index + (dx < 0 ? 1 : -1));
            }
        }, { passive: true });

        // ถ้าเปลี่ยนหน้า (เช่น กด Back) ให้ปิด Lightbox
        window.addEventListener("hashchange", closeLightbox);
    }


    /* ===============================
       MEMBER CARD (กดที่รูปสมาชิก → การ์ดข้อความ)
       - แสดงรูป / ชื่อ / ข้อความ "ໃນສາຍຕາຂອງພວກເຮົາ" / ปุ่มติดต่อ
       - ปุ่ม ‹ › ดูคนถัดไปในทีม / คีย์บอร์ด ← → Esc / มือถือปัดซ้าย-ขวา
       - ข้อมูลมาจาก TEAM MEMBER DATA ด้านบน (message / contact)
       =============================== */

    var memberModal = {
        teamId: "",
        index: 0,
        lastFocus: null
    };

    // ไอคอนปุ่มติดต่อ (วาดแบบเรียบง่าย)
    var CONTACT_ICONS = {
        facebook:  '<path d="M14 21v-7h2.6l.4-3H14V9.2c0-.9.3-1.5 1.6-1.5H17V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H8.5v3H11v7" fill="currentColor"/>',
        instagram: '<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16.9" cy="7.1" r="1.2" fill="currentColor"/>',
        tiktok:    '<path d="M13.5 4v10.2a3.3 3.3 0 1 1-3.3-3.3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M13.5 4c.4 2.6 2.1 4.2 4.8 4.4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
        whatsapp:  '<path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.3 18.4z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M9.3 8.6c.3-.4.7-.4.9 0l.7 1.6c.1.3 0 .5-.2.7l-.5.5c.5 1.1 1.4 2 2.5 2.5l.5-.5c.2-.2.4-.3.7-.2l1.6.7c.4.2.4.6 0 .9-.9.9-2 1-3.2.4a8 8 0 0 1-3.4-3.4c-.6-1.2-.5-2.3.4-3.2z" fill="currentColor"/>',
        line:      '<path d="M12 4.5c-4.7 0-8.5 3-8.5 6.8 0 3.4 3 6.2 7.1 6.7.8.2.6 1.2.4 2.1 1.9-.9 5.6-3.3 7.4-5.6 1.4-1.3 2.1-2.4 2.1-3.2 0-3.8-3.8-6.8-8.5-6.8z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/>',
        messenger: '<path d="M12 4C7.6 4 4 7.3 4 11.5c0 2.3 1.1 4.3 2.9 5.7V20l2.6-1.4c.8.2 1.6.4 2.5.4 4.4 0 8-3.3 8-7.5S16.4 4 12 4z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M7.8 13.6l2.6-2.8 1.9 1.5 2.1-1.5-2.6 2.8-1.9-1.5z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>',
        telegram:  '<path d="M20 5L3.8 11.3c-.7.3-.7 1 0 1.2l4 1.3 1.6 4.8c.2.6.9.7 1.3.3l2.3-2.1 4 3c.6.4 1.3.1 1.4-.6L21 6c.2-.8-.4-1.3-1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 13.8l8.5-5.5-6.3 6.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
        youtube:   '<rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 9.5v5l4.3-2.5z" fill="currentColor"/>',
        x:         '<path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
        link:      '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
    };

    var CONTACT_TYPES = [
        { type: "messenger", label: "Messenger", test: /(^|\.)m\.me\/|messenger\.com/ },
        { type: "facebook",  label: "Facebook",  test: /facebook\.com|(^|\/\/|\.)fb\.(com|me)/ },
        { type: "instagram", label: "Instagram", test: /instagram\.com|instagr\.am/ },
        { type: "tiktok",    label: "TikTok",    test: /tiktok\.com/ },
        { type: "whatsapp",  label: "WhatsApp",  test: /wa\.me|whatsapp\.com/ },
        { type: "line",      label: "LINE",      test: /line\.me|lin\.ee/ },
        { type: "telegram",  label: "Telegram",  test: /(^|\/\/)t\.me\/|telegram\.(me|org)/ },
        { type: "youtube",   label: "YouTube",   test: /youtube\.com|youtu\.be/ },
        { type: "x",         label: "X",         test: /(^|\/\/|\.)(x|twitter)\.com/ }
    ];

    // แปลงค่า contact → { url, type, label }
    function parseContact(value) {
        var raw = String(value || "").trim();
        if (!raw) return null;

        // ใส่แค่เบอร์โทร → WhatsApp (เบอร์ลาว 020... → +856 20...)
        var digits = raw.replace(/[\s\-().]/g, "");
        if (/^\+?\d{8,15}$/.test(digits)) {
            digits = digits.replace(/^\+/, "");
            if (/^0/.test(digits)) digits = "856" + digits.slice(1);
            return { url: "https://wa.me/" + digits, type: "whatsapp", label: "WhatsApp" };
        }

        // ลืมใส่ https://
        var url = /^https?:\/\//i.test(raw) ? raw : "https://" + raw.replace(/^\/+/, "");
        var lower = url.toLowerCase();

        for (var i = 0; i < CONTACT_TYPES.length; i++) {
            if (CONTACT_TYPES[i].test.test(lower)) {
                return { url: url, type: CONTACT_TYPES[i].type, label: CONTACT_TYPES[i].label };
            }
        }
        return { url: url, type: "link", label: "" };
    }

    function mmEl(id) {
        return document.getElementById(id);
    }

    function getModalMembers() {
        return (typeof teamMembers !== "undefined" && teamMembers[memberModal.teamId]) || [];
    }

    function showMember(index) {
        var members = getModalMembers();
        var total = members.length;
        if (!total) return;

        memberModal.index = (index + total) % total;   // วนรอบ: คนสุดท้าย → คนแรก
        var member = members[memberModal.index];
        var card = mmEl("mm-card");

        card.classList.remove("is-changing");
        void card.offsetWidth;                          // เริ่มแอนิเมชันใหม่ทุกครั้งที่เปลี่ยนคน
        card.classList.add("is-changing");

        // รูป
        var img = mmEl("mm-img");
        var holder = img.parentElement;
        holder.classList.remove("img-missing");
        holder.setAttribute("data-missing", String(member.image || "").split("/").pop());
        img.src = member.image || "";
        img.alt = member.name || "";

        // ชื่อ
        mmEl("mm-name").textContent = member.name || "";

        // ข้อความ
        var message = String(member.message || "").trim();
        var messageBox = mmEl("mm-message");
        messageBox.textContent = message;
        mmEl("mm-note").classList.toggle("is-empty", !message);

        // ปุ่มติดต่อ
        var contact = parseContact(member.contact);
        var link = mmEl("mm-contact");
        if (contact) {
            link.href = contact.url;
            link.setAttribute("data-type", contact.type);
            mmEl("mm-contact-icon").innerHTML = CONTACT_ICONS[contact.type] || CONTACT_ICONS.link;
            mmEl("mm-contact-label").textContent = contact.label
                ? "ຄອນແທັກ " + contact.label
                : "ຊ່ອງທາງຕິດຕໍ່";
            link.hidden = false;
        } else {
            link.hidden = true;
            link.removeAttribute("href");
        }

        mmEl("mm-counter").textContent = (memberModal.index + 1) + " / " + total;
        mmEl("member-modal").classList.toggle("is-single", total < 2);
        mmEl("mm-body").scrollTop = 0;
    }

    function openMemberModal(index) {
        var box = mmEl("member-modal");
        if (!box) return;

        memberModal.lastFocus = document.activeElement;
        box.setAttribute("data-team", memberModal.teamId);
        showMember(index);
        box.hidden = false;
        document.documentElement.classList.add("is-locked");   // หยุดการเลื่อนหน้าเว็บด้านหลัง

        requestAnimationFrame(function () {
            box.classList.add("is-open");
        });
        mmEl("mm-close").focus();
    }

    function closeMemberModal() {
        var box = mmEl("member-modal");
        if (!box || box.hidden) return;

        box.classList.remove("is-open");
        document.documentElement.classList.remove("is-locked");
        setTimeout(function () {
            box.hidden = true;
        }, 250);

        if (memberModal.lastFocus && typeof memberModal.lastFocus.focus === "function") {
            memberModal.lastFocus.focus();
        }
    }

    function initMemberModal() {
        var box = mmEl("member-modal");
        var grid = document.getElementById("member-grid");
        if (!box || !grid) return;

        // กดรูปสมาชิก → เปิดการ์ด
        grid.addEventListener("click", function (event) {
            var card = event.target.closest(".member");
            if (card) openMemberModal(Number(card.getAttribute("data-index")));
        });

        mmEl("mm-close").addEventListener("click", closeMemberModal);
        mmEl("mm-prev").addEventListener("click", function () { showMember(memberModal.index - 1); });
        mmEl("mm-next").addEventListener("click", function () { showMember(memberModal.index + 1); });

        // กดพื้นที่มืดรอบการ์ดเพื่อปิด
        box.addEventListener("click", function (event) {
            if (event.target === box) closeMemberModal();
        });

        // รูปยังไม่มี → แสดงชื่อไฟล์แทน
        var img = mmEl("mm-img");
        img.addEventListener("error", function () {
            if (img.getAttribute("src")) img.parentElement.classList.add("img-missing");
        });
        img.addEventListener("load", function () {
            img.parentElement.classList.remove("img-missing");
        });

        // คีย์บอร์ด
        document.addEventListener("keydown", function (event) {
            if (box.hidden) return;

            if (event.key === "Escape") {
                closeMemberModal();
            } else if (event.key === "ArrowLeft") {
                showMember(memberModal.index - 1);
            } else if (event.key === "ArrowRight") {
                showMember(memberModal.index + 1);
            } else if (event.key === "Tab") {
                // วนโฟกัสอยู่ในการ์ด
                var items = Array.prototype.filter.call(
                    box.querySelectorAll("button, a[href]"),
                    function (el) { return !el.hidden && el.offsetParent !== null; }
                );
                if (!items.length) return;
                var first = items[0];
                var last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        // มือถือ: ปัดซ้าย-ขวา
        var startX = 0;
        var startY = 0;

        box.addEventListener("touchstart", function (event) {
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
        }, { passive: true });

        box.addEventListener("touchend", function (event) {
            var dx = event.changedTouches[0].clientX - startX;
            var dy = event.changedTouches[0].clientY - startY;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                showMember(memberModal.index + (dx < 0 ? 1 : -1));
            }
        }, { passive: true });

        // ถ้าเปลี่ยนหน้า (เช่น กด Back) ให้ปิดการ์ด
        window.addEventListener("hashchange", closeMemberModal);
    }


    /* ===============================
       VIDEO
       - ถ้ายังไม่มีไฟล์วิดีโอ จะแสดงข้อความแทนจอดำ
       - กดเล่นวิดีโอ → เพลงพื้นหลังหยุดเอง
       - ออกจากหน้าวิดีโอ → วิดีโอหยุดเอง
       =============================== */

    function initVideo() {
        var video = document.getElementById("memory-video");
        var screen = document.getElementById("video-screen");
        if (!video || !screen) return;

        function markMissing() {
            screen.classList.add("is-missing");
        }

        var source = video.querySelector("source");
        if (source) source.addEventListener("error", markMissing);
        video.addEventListener("error", markMissing);

        // เผื่อ error เกิดก่อนสคริปต์ทำงาน
        if (video.networkState === 3) markMissing();   // NETWORK_NO_SOURCE

        // ปรับกรอบตามสัดส่วนของไฟล์วิดีโอจริง (แนวตั้ง 3:4 / แนวนอน 16:9 ...)
        function fitRatio() {
            if (!video.videoWidth || !video.videoHeight) return;
            var frame = screen.closest(".video-frame") || screen;
            frame.style.setProperty("--video-ratio", String(video.videoWidth / video.videoHeight));
        }
        video.addEventListener("loadedmetadata", fitRatio);
        if (video.readyState >= 1) fitRatio();

        video.addEventListener("play", function () {
            var music = document.getElementById("bg-music");
            if (music && !music.paused) music.pause();
        });

        window.addEventListener("hashchange", function () {
            if (!video.paused) video.pause();
        });
    }


    /* ===============================
       INIT
       =============================== */

    function init() {
        renderTeamOverview();
        renderGallery();
        initLightbox();
        initMemberModal();
        checkExistingImages();
        initViews();
        initMusic();
        initVideo();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
