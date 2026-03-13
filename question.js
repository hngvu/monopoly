const QUESTIONS = [
    {
        "q": "Sau Hiệp định Giơnevơ năm 1954, đặc điểm lớn nhất của tình hình nước ta là gì?",
        "a": [
            "Đất nước tạm thời bị chia cắt làm hai miền với hai chế độ chính trị khác nhau.",
            "Cả nước cùng đi lên xây dựng Chủ nghĩa xã hội.",
            "Pháp tiếp tục đô hộ miền Nam Việt Nam.",
            "Mỹ rút quân hoàn toàn khỏi miền Nam Việt Nam."
        ],
        "c": 0
    },
    {
        "q": "Hội nghị Trung ương lần thứ bao nhiêu (1-1959) quyết định sử dụng bạo lực cách mạng ở miền Nam?",
        "a": [
            "Hội nghị Trung ương 13.",
            "Hội nghị Trung ương 14.",
            "Hội nghị Trung ương 15.",
            "Hội nghị Trung ương 16."
        ],
        "c": 2
    },
    {
        "q": "Phong trào nào ở miền Nam (1960) đã làm tan rã từng mảng lớn chính quyền địch?",
        "a": [
            "Phong trào Phá ấp chiến lược.",
            "Phong trào Đồng khởi.",
            "Phong trào Ba sẵn sàng.",
            "Phong trào Tiếng hát át tiếng bom."
        ],
        "c": 1
    },
    {
        "q": "Đại hội lần thứ mấy của Đảng (9-1960) đã hoàn chỉnh đường lối cách mạng trong giai đoạn mới?",
        "a": [
            "Đại hội I.",
            "Đại hội II.",
            "Đại hội III.",
            "Đại hội IV."
        ],
        "c": 2
    },
    {
        "q": "Theo Đại hội III (1960), cách mạng XHCN ở miền Bắc giữ vai trò gì?",
        "a": [
            "Vai trò quyết định trực tiếp.",
            "Vai trò quyết định nhất.",
            "Vai trò hỗ trợ.",
            "Vai trò quan trọng."
        ],
        "c": 1
    },
    {
        "q": "Theo Đại hội III (1960), cách mạng dân tộc dân chủ nhân dân ở miền Nam giữ vai trò gì?",
        "a": [
            "Vai trò quyết định trực tiếp.",
            "Vai trò quyết định nhất.",
            "Vai trò thứ yếu.",
            "Vai trò hậu phương."
        ],
        "c": 0
    },
    {
        "q": "Mục tiêu chung của cách mạng cả nước giai đoạn 1954-1975 là gì?",
        "a": [
            "Xây dựng CNXH ở cả hai miền.",
            "Thực hiện cách mạng tư sản dân quyền.",
            "Giải phóng miền Nam, hòa bình thống nhất Tổ quốc.",
            "Đưa miền Bắc tiến nhanh lên chủ nghĩa cộng sản."
        ],
        "c": 2
    },
    {
        "q": "Chiến lược 'Chiến tranh đặc biệt' của Mỹ diễn ra trong khoảng thời gian nào?",
        "a": [
            "1954-1960.",
            "1961-1965.",
            "1965-1968.",
            "1969-1975."
        ],
        "c": 1
    },
    {
        "q": "Thắng lợi quân sự nào mở đầu cho khả năng đánh bại 'Chiến tranh đặc biệt'?",
        "a": [
            "Chiến thắng Ấp Bắc.",
            "Chiến thắng Bình Giã.",
            "Chiến thắng Vạn Tường.",
            "Chiến thắng Điện Biên Phủ."
        ],
        "c": 0
    },
    {
        "q": "Mỹ coi nội dung nào là 'quốc sách' trong chiến lược Chiến tranh đặc biệt?",
        "a": [
            "Phát triển kinh tế.",
            "Xây dựng ấp chiến lược.",
            "Mở rộng ngoại giao.",
            "Cải cách giáo dục."
        ],
        "c": 1
    },
    {
        "q": "Đỉnh cao của cuộc đấu tranh chống chiến lược 'Chiến tranh cục bộ' là sự kiện nào?",
        "a": [
            "Chiến thắng Bình Giã.",
            "Tổng tiến công và nổi dậy Tết Mậu Thân 1968.",
            "Chiến dịch Đường 9 - Nam Lào.",
            "Ký Hiệp định Paris."
        ],
        "c": 1
    },
    {
        "q": "Chiến lược 'Chiến tranh cục bộ' (1965-1968) của Mỹ có đặc điểm gì nổi bật?",
        "a": [
            "Sử dụng chủ yếu quân đội tay sai.",
            "Đưa quân viễn chinh Mỹ vào trực tiếp tham chiến ở miền Nam.",
            "Chỉ dùng không quân đánh phá miền Bắc.",
            "Rút dần quân Mỹ về nước."
        ],
        "c": 1
    },
    {
        "q": "Khẩu hiệu nào được Đảng phát động trong kháng chiến chống Mỹ cứu nước?",
        "a": [
            "Tất cả cho tiền tuyến, tất cả để chiến thắng.",
            "Quyết tử cho Tổ quốc quyết sinh.",
            "Tất cả để đánh thắng giặc Mỹ xâm lược.",
            "Phá kho thóc giải quyết nạn đói."
        ],
        "c": 2
    },
    {
        "q": "Sự kiện nào buộc Mỹ phải chấp nhận ngồi vào bàn đàm phán tại Paris năm 1968?",
        "a": [
            "Chiến thắng Ấp Bắc.",
            "Trận Điện Biên Phủ trên không.",
            "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968.",
            "Chiến dịch Hồ Chí Minh."
        ],
        "c": 2
    },
    {
        "q": "Chiến lược 'Việt Nam hóa chiến tranh' của Mỹ diễn ra trong giai đoạn nào?",
        "a": [
            "1954-1960.",
            "1961-1965.",
            "1965-1968.",
            "1969-1975."
        ],
        "c": 3
    },
    {
        "q": "Thắng lợi nào được ví như trận 'Điện Biên Phủ trên không' năm 1972?",
        "a": [
            "Đánh bại cuộc tập kích bằng B.52 vào Hà Nội, Hải Phòng.",
            "Chiến thắng Vạn Tường.",
            "Chiến dịch Đường 9 - Nam Lào.",
            "Giải phóng Đà Nẵng."
        ],
        "c": 0
    },
    {
        "q": "Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết vào năm nào?",
        "a": [
            "1972.",
            "1973.",
            "1974.",
            "1975."
        ],
        "c": 1
    },
    {
        "q": "Bộ Chính trị đề ra quyết tâm chiến lược giải phóng miền Nam trong thời gian bao lâu?",
        "a": [
            "Trong 1 năm (1975).",
            "Trong 2 năm (1975-1976).",
            "Trong 3 năm (1975-1977).",
            "Trong 5 năm (1975-1980)."
        ],
        "c": 1
    },
    {
        "q": "Chiến dịch cuối cùng kết thúc 21 năm kháng chiến chống Mỹ có tên là gì?",
        "a": [
            "Chiến dịch Tây Nguyên.",
            "Chiến dịch Huế - Đà Nẵng.",
            "Chiến dịch Hồ Chí Minh.",
            "Chiến dịch Quang Trung."
        ],
        "c": 2
    },
    {
        "q": "Miền Bắc thực hiện Kế hoạch Nhà nước 5 năm lần thứ nhất trong giai đoạn nào?",
        "a": [
            "1954-1959.",
            "1961-1965.",
            "1966-1970.",
            "1971-1975."
        ],
        "c": 1
    },
    {
        "q": "Phong trào thi đua nào dành cho thanh niên miền Bắc trong kháng chiến chống Mỹ?",
        "a": [
            "Ba đảm đang.",
            "Ba sẵn sàng.",
            "Tay cày tay súng.",
            "Tiếng hát át tiếng bom."
        ],
        "c": 1
    },
    {
        "q": "Phong trào thi đua nào dành cho phụ nữ miền Bắc trong kháng chiến chống Mỹ?",
        "a": [
            "Ba sẵn sàng.",
            "Ba đảm đang.",
            "Gió Đại Phong.",
            "Sóng Duyên Hải."
        ],
        "c": 1
    },
    {
        "q": "Trong cuộc kháng chiến, miền Bắc đã bảo đảm bao nhiêu phần trăm bộ đội chủ lực cho tiền tuyến?",
        "a": [
            "50%.",
            "60%.",
            "70%.",
            "80%."
        ],
        "c": 3
    },
    {
        "q": "Đoàn 559 được thành lập nhằm mục đích gì?",
        "a": [
            "Xây dựng kinh tế miền Bắc.",
            "Mở đường Trường Sơn trên bộ để chi viện miền Nam.",
            "Đào tạo cán bộ ngoại giao.",
            "Xây dựng quân chủng không quân."
        ],
        "c": 1
    },
    {
        "q": "Đoàn 759 phụ trách tuyến đường chi viện nào cho miền Nam?",
        "a": [
            "Đường Hồ Chí Minh trên bộ.",
            "Đường Hồ Chí Minh trên biển.",
            "Đường hàng không dân dụng.",
            "Đường sắt Bắc Nam."
        ],
        "c": 1
    },
    {
        "q": "Nội dung của phương châm đấu tranh 'Ba mũi giáp công' là gì?",
        "a": [
            "Kinh tế, Chính trị, Văn hóa.",
            "Quân sự, Chính trị, Binh vận.",
            "Ngoại giao, Kinh tế, Quân sự.",
            "Vũ trang, Ngoại giao, Tư tưởng."
        ],
        "c": 1
    },
    {
        "q": "Mệnh lệnh nổi tiếng của Đại tướng Võ Nguyên Giáp trong mùa Xuân 1975 là gì?",
        "a": [
            "Không có gì quý hơn độc lập tự do.",
            "Thần tốc, thần tốc hơn nữa, táo bạo, táo bạo hơn nữa.",
            "Đánh chắc, tiến chắc.",
            "Nhằm thẳng quân thù mà bắn."
        ],
        "c": 1
    },
    {
        "q": "Ngày 30/4/1975 là ngày diễn ra sự kiện trọng đại nào?",
        "a": [
            "Ký Hiệp định Paris.",
            "Giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
            "Thành lập Đảng Cộng sản Việt Nam.",
            "Bác Hồ đọc Tuyên ngôn Độc lập."
        ],
        "c": 1
    },
    {
        "q": "Một trong những bài học kinh nghiệm của Đảng từ thắng lợi chống Mỹ là gì?",
        "a": [
            "Chỉ dựa vào sức mạnh vũ trang.",
            "Giương cao ngọn cờ độc lập dân tộc và CNXH.",
            "Chỉ dựa vào sự giúp đỡ của nước ngoài.",
            "Tập trung phát triển kinh tế trước khi đấu tranh."
        ],
        "c": 1
    },
    {
        "q": "Chiến thắng nào buộc Mỹ phải rút quân hoàn toàn về nước?",
        "a": [
            "Chiến thắng Tết Mậu Thân 1968.",
            "Chiến thắng Điện Biên Phủ trên không và Hiệp định Paris.",
            "Chiến dịch Hồ Chí Minh.",
            "Chiến thắng Ấp Bắc."
        ],
        "c": 1
    },
    {
        "q": "Vai trò của miền Bắc đối với cuộc kháng chiến chống Mỹ là gì?",
        "a": [
            "Là tiền tuyến trực tiếp đánh Mỹ.",
            "Là hậu phương vững chắc cho tiền tuyến miền Nam.",
            "Là nơi tập trung quân viễn chinh Mỹ.",
            "Là khu vực trung lập."
        ],
        "c": 1
    },
    {
        "q": "Tại miền Nam, cuộc đấu tranh của đối tượng nào phát triển mạnh mẽ tại các đô thị?",
        "a": [
            "Chỉ có nông dân.",
            "Học sinh, sinh viên, Phật giáo.",
            "Địa chủ và tư sản.",
            "Thương gia nước ngoài."
        ],
        "c": 1
    },
    {
        "q": "Khẩu hiệu 'Tay cày tay súng' thể hiện tinh thần gì của quân dân miền Bắc?",
        "a": [
            "Chỉ lo sản xuất không chiến đấu.",
            "Chỉ lo chiến đấu không sản xuất.",
            "Vừa sản xuất vừa chiến đấu chống chiến tranh phá hoại.",
            "Rời bỏ ruộng đồng đi tản cư."
        ],
        "c": 2
    },
    {
        "q": "Quyết sách của Đảng trong năm 1975 cho thấy sự lãnh đạo như thế nào?",
        "a": [
            "Cứng nhắc theo kế hoạch cũ.",
            "Linh hoạt, chớp thời cơ giải phóng sớm hơn dự kiến.",
            "Chần chừ chờ đợi kết quả đàm phán.",
            "Dừng lại sau khi giải phóng Tây Nguyên."
        ],
        "c": 1
    },
    {
        "q": "Sức mạnh thời đại trong kháng chiến chống Mỹ được hiểu là gì?",
        "a": [
            "Sức mạnh của vũ khí hạt nhân.",
            "Sự ủng hộ của các nước XHCN và nhân dân tiến bộ thế giới.",
            "Sức mạnh của máy tính điện tử.",
            "Sức mạnh của các công ty đa quốc gia."
        ],
        "c": 1
    },
    {
        "q": "Ý nghĩa vĩ đại của thắng lợi mùa Xuân 1975 là gì?",
        "a": [
            "Kết thúc 30 năm chiến tranh cách mạng, mở ra kỷ nguyên độc lập, thống nhất.",
            "Bắt đầu cuộc chiến tranh mới với các nước láng giềng.",
            "Thành lập chính phủ đa đảng.",
            "Chấm dứt hoàn toàn sự phát triển của kinh tế thị trường."
        ],
        "c": 0
    },
    {
        "q": "Mỹ đã sử dụng phương tiện bay nào để tập kích vào Hà Nội, Hải Phòng năm 1972?",
        "a": [
            "Máy bay trực thăng.",
            "Máy bay B.52.",
            "Tên lửa hành trình.",
            "Khinh khí cầu."
        ],
        "c": 1
    },
    {
        "q": "Mục tiêu của chiến lược 'Việt Nam hóa chiến tranh' là gì?",
        "a": [
            "Sớm rút quân Mỹ ra khỏi cuộc chiến.",
            "Dùng người Việt đánh người Việt, giảm xương máu người Mỹ.",
            "Giúp Việt Nam phát triển kinh tế mạnh mẽ.",
            "Chuyển giao toàn bộ vũ khí hạt nhân cho miền Nam."
        ],
        "c": 1
    },
    {
        "q": "Sự lãnh đạo của Đảng được ví như hình ảnh gì trong sườn bài thuyết trình?",
        "a": [
            "Ngọn đuốc trong đêm.",
            "Ngọn hải đăng trong bão táp.",
            "Con thuyền trên biển cả.",
            "Cánh chim đầu đàn."
        ],
        "c": 1
    },
    {
        "q": "Bài học liên hệ hiện nay từ lịch sử Đảng là gì?",
        "a": [
            "Tiếp tục đóng cửa nền kinh tế.",
            "Sự lãnh đạo của Đảng đưa đất nước đổi mới và phát triển vị thế.",
            "Dừng việc hợp tác với các nước tư bản.",
            "Chỉ tập trung vào phát triển quân sự."
        ],
        "c": 1
    }
]
