const QUESTIONS = [
    {
        q: "Theo Luật Phòng, chống bạo lực gia đình năm 2022, bạo lực gia đình được định nghĩa là hành vi như thế nào?",
        a: [
            "Hành vi cố ý gây tổn hại hoặc có khả năng gây tổn hại về thể chất, tinh thần, tình dục, kinh tế.",
            "Hành vi xúc phạm danh dự giữa những người hàng xóm với nhau.",
            "Sự mâu thuẫn và tranh cãi gay gắt giữa vợ và chồng trong cuộc sống hàng ngày.",
            "Hành vi đánh đập gây thương tích nặng cho các thành viên trong gia đình.",
        ],
        c: 0,
    },
    {
        q: "Hành vi nào sau đây được xếp vào nhóm bạo lực kinh tế?",
        a: [
            "Cấm đoán vợ/chồng đi làm hoặc tham gia các hoạt động tạo thu nhập.",
            "Đập phá đồ đạc trong nhà để thị uy sức mạnh.",
            "Thường xuyên mắng chửi, xúc phạm nhân phẩm của đối phương.",
            "Ép buộc đối phương quan hệ tình dục ngoài ý muốn.",
        ],
        c: 0,
    },
    {
        q: "Theo số liệu Điều tra quốc gia năm 2019, tỷ lệ phụ nữ Việt Nam từng kết hôn đã trải qua ít nhất một hình thức bạo lực trong đời là khoảng bao nhiêu?",
        a: ["62,9%", "31,6%", "10%", "90,4%"],
        c: 0,
    },
    {
        q: 'Tại sao bạo lực gia đình thường được ví như một "tảng băng chìm"?',
        a: [
            "Vì bạo lực chỉ xảy ra ở những vùng sâu vùng xa, khó tiếp cận thông tin.",
            "Vì các hành vi bạo lực thường diễn ra vào ban đêm khi mọi người đang ngủ.",
            "Vì đa số các vụ việc không được báo cáo và nạn nhân thường giữ im lặng.",
            "Vì pháp luật hiện nay chưa có quy định cụ thể để xử lý hành vi này.",
        ],
        c: 2,
    },
    {
        q: "Bạo lực gia đình gây thiệt hại kinh tế ước tính bao nhiêu phần trăm GDP của Việt Nam (theo dữ liệu năm 2019)?",
        a: ["1,8%", "35%", "0,2%", "5%"],
        c: 0,
    },
    {
        q: "Theo quan điểm của chủ nghĩa Mác - Lênin, nguồn gốc sâu xa của sự bất bình đẳng giới và nô dịch phụ nữ là gì?",
        a: [
            "Sự khác biệt về sức khỏe thể chất giữa nam và nữ.",
            "Các quy định khắt khe của tôn giáo thời kỳ phong kiến.",
            "Sự ra đời của chế độ tư hữu về tư liệu sản xuất.",
            "Sự thiếu hụt về trình độ học vấn của người phụ nữ.",
        ],
        c: 2,
    },
    {
        q: "Ph. Ăng-ghen đã nhận định sự áp bức giai cấp đầu tiên trong lịch sử trùng với hiện tượng nào?",
        a: [
            "Sự phân biệt đối xử giữa các bộ tộc khác nhau.",
            "Sự bóc lột của chủ nô đối với nô lệ.",
            "Sự nô dịch của đàn ông đối với đàn bà.",
            "Việc cấm đoán phụ nữ tham gia vào các lễ hội cộng đồng.",
        ],
        c: 2,
    },
    {
        q: 'Yếu tố nào sau đây thường được coi là nguyên nhân "gốc rễ" duy trì bạo lực gia đình đối với phụ nữ?',
        a: [
            "Sự thiếu hụt các kỹ năng nội trợ của người vợ.",
            "Khó khăn về kinh tế và áp lực việc làm.",
            "Tình trạng lạm dụng rượu bia của nam giới.",
            "Bất bình đẳng giới và các định kiến về vai trò của nam giới.",
        ],
        c: 3,
    },
    {
        q: "Đại dịch Covid-19 đã ảnh hưởng như thế nào đến tình trạng bạo lực gia đình tại Việt Nam?",
        a: [
            "Chỉ làm gia tăng bạo lực đối với người già, không ảnh hưởng đến phụ nữ.",
            "Không gây ra ảnh hưởng đáng kể vì bạo lực là vấn đề cá nhân của mỗi nhà.",
            "Làm trầm trọng thêm tình trạng bạo lực do áp lực kinh tế và sự cô lập xã hội.",
            "Làm giảm số vụ bạo lực do các thành viên gia đình có nhiều thời gian gần gũi nhau hơn.",
        ],
        c: 2,
    },
    {
        q: "Tại sao trẻ em chứng kiến bạo lực gia đình lại có nguy cơ trở thành thủ phạm hoặc nạn nhân khi trưởng thành?",
        a: [
            "Do tác động của các trò chơi điện tử bạo lực mà các em tham gia.",
            "Do các em không được đi học đầy đủ trong thời gian xảy ra bạo lực.",
            "Do yếu tố di truyền bẩm sinh từ những người cha có xu hướng hung hăng.",
            "Do sự lặp lại của các mô hình hành vi (vòng tròn bạo lực) được quan sát từ cha mẹ.",
        ],
        c: 3,
    },
    {
        q: 'Sự khác biệt chính giữa "Dữ liệu về mức độ phổ biến" và "Dữ liệu hành chính" về bạo lực là gì?',
        a: [
            "Không có sự khác biệt, hai thuật ngữ này có thể dùng thay thế cho nhau.",
            "Dữ liệu hành chính chính xác hơn vì được cảnh sát trực tiếp ghi nhận.",
            "Dữ liệu phổ biến chỉ tập trung vào bạo lực kinh tế.",
            "Dữ liệu phổ biến đến từ các cuộc điều tra dân số, trong khi dữ liệu hành chính đến từ các nhà cung cấp dịch vụ. ",
        ],
        c: 3,
    },
    {
        q: "Nguyên tắc quan trọng nhất khi thu thập dữ liệu về bạo lực đối với phụ nữ là gì?",
        a: [
            "Đảm bảo tính công khai danh tính để răn đe thủ phạm.",
            "Bắt buộc nạn nhân phải đối chất trực tiếp với thủ phạm khi lấy dữ liệu.",
            "Thu thập càng nhanh càng tốt để kịp báo cáo lấy thành tích.",
            "Ưu tiên đạo đức, an toàn và bảo mật thông tin cho nạn nhân.",
        ],
        c: 3,
    },
    {
        q: "Hành vi nào dưới đây minh họa cho bạo lực tinh thần?",
        a: [
            "Kiểm soát việc đi lại, gặp gỡ bạn bè và người thân của nạn nhân.",
            "Ném đồ vật vào người nhưng không gây thương tích chảy máu.",
            "Chủ động đề nghị ly hôn khi cuộc sống không hạnh phúc.",
            "Lấy tiền lương của vợ/chồng mà không hỏi ý kiến.",
        ],
        c: 0,
    },
    {
        q: "Tỷ lệ phụ nữ bị bạo lực bởi chồng/bạn tình mà chưa bao giờ kể với bất kỳ ai (trước khi phỏng vấn) là bao nhiêu theo báo cáo 2019?",
        a: [
            "Chỉ khoảng 10%.",
            "Gần một nửa (49,6%).",
            "90,4%.",
            "Khoảng 25%.",
        ],
        c: 1,
    },
    {
        q: 'Phân tích của UNFPA chỉ ra rằng "Bạo lực trên cơ sở giới" (GBV) khác với "Bạo lực gia đình" (DV) ở điểm nào?',
        a: [
            "GBV nhấn mạnh vào bạo lực do sự khác biệt về vai trò giới và quyền lực xã hội.",
            "Bạo lực gia đình luôn nghiêm trọng hơn bạo lực trên cơ sở giới.",
            "Bạo lực gia đình chỉ bao gồm bạo lực đối với phụ nữ, còn GBV bao gồm cả trẻ em.",
            "GBV chỉ xảy ra ở nơi công cộng, còn bạo lực gia đình chỉ xảy ra ở nhà.",
        ],
        c: 0,
    },
    {
        q: 'Theo V.I. Lênin, điều kiện then chốt để giải phóng hoàn toàn phụ nữ khỏi "chế độ nô lệ gia đình" là gì?',
        a: [
            "Yêu cầu đàn ông phải làm hết các công việc nội trợ.",
            "Ban hành các bộ luật hôn nhân tiến bộ.",
            "Tăng cường công tác hòa giải tại cộng đồng dân cư.",
            "Thủ tiêu chế độ tư hữu và đưa phụ nữ tham gia vào lao động xã hội hóa.",
        ],
        c: 3,
    },
    {
        q: "Một người chồng thường xuyên uống rượu hàng ngày khiến nguy cơ bị bạo hành của người vợ tăng lên gấp mấy lần?",
        a: [
            "Gấp 10 lần.",
            "Gấp 7 lần.",
            "Không làm tăng nguy cơ, chỉ là cái cớ sau khi bạo lực xảy ra.",
            "Gấp 2 lần.",
        ],
        c: 1,
    },
    {
        q: "Hệ quả nào sau đây đối với kinh tế là đúng khi nói về phụ nữ bị bạo hành?",
        a: [
            "Họ có xu hướng làm việc nhiều hơn để kiếm tiền bù đắp chi phí y tế.",
            "Thu nhập của họ thấp hơn khoảng 35% so với những phụ nữ không bị bạo hành.",
            "Họ được các doanh nghiệp ưu tiên tăng lương để hỗ trợ gia đình.",
            "Họ hoàn toàn không bị ảnh hưởng về mặt thu nhập cá nhân.",
        ],
        c: 1,
    },
    {
        q: 'Tại sao công tác "hòa giải" đôi khi lại có tác động tiêu cực trong các vụ bạo lực gia đình nghiêm trọng?',
        a: [
            "Vì nạn nhân không bao giờ muốn nói chuyện với người hòa giải.",
            "Vì nó làm giảm tính răn đe của pháp luật và đặt nạn nhân vào tình thế nguy hiểm hơn.",
            "Vì hòa giải chỉ dành cho những vụ tranh chấp đất đai.",
            "Vì hòa giải tốn quá nhiều kinh phí của nhà nước.",
        ],
        c: 1,
    },
    {
        q: "Theo báo cáo của ASEAN, tỷ lệ trẻ em gái bị lạm dụng tình dục khi còn nhỏ tuổi là khoảng bao nhiêu?",
        a: [
            "Cứ 5 em thì có 1 em.",
            "Cứ 10 em thì có 1 em.",
            "Gần như không có số liệu vì vấn đề này quá nhạy cảm.",
            "Cứ 2 em thì có 1 em.",
        ],
        c: 0,
    },
    {
        q: "Theo quy định của pháp luật Việt Nam, bạo lực gia đình được hiểu là hành vi như thế nào?",
        a: [
            "Sự tranh chấp về tài sản giữa các thành viên trong gia đình tại tòa án.",
            "Hành vi cố ý của thành viên gia đình gây tổn hại hoặc có khả năng gây tổn hại cho thành viên khác.",
            "Chỉ bao gồm các hành vi đánh đập gây thương tích nặng cho nạn nhân.",
            "Những mâu thuẫn lời nói thông thường trong đời sống sinh hoạt hàng ngày.",
        ],
        c: 1,
    },
    {
        q: "Hành vi nào sau đây được xếp vào nhóm bạo lực kinh tế?",
        a: [
            "Kiểm soát chặt chẽ thu nhập của thành viên khác nhằm tạo sự phụ thuộc tài chính.",
            "Sử dụng vũ lực khiến nạn nhân bị bầm tím hoặc chấn thương nhẹ.",
            "Thường xuyên mắng nhiếc và hạ thấp danh dự của người vợ trước mặt con cái.",
            "Ép buộc thành viên trong gia đình thực hiện các hành vi tình dục trái ý muốn.",
        ],
        c: 0,
    },
    {
        q: 'Tại sao bạo lực gia đình thường được ví như một "tảng băng chìm"?',
        a: [
            "Vì phần lớn các vụ việc không được nạn nhân báo cáo hoặc công khai ra xã hội.",
            "Vì chỉ có những gia đình giàu có mới có khả năng che giấu hành vi bạo lực.",
            "Vì nạn nhân thường sử dụng đá lạnh để sơ cứu các vết thương do bạo hành.",
            "Vì các vụ bạo lực thường chỉ xảy ra vào mùa đông ở các vùng khí hậu lạnh.",
        ],
        c: 0,
    },
    {
        q: "Theo nghiên cứu quốc gia năm 2019, khoảng bao nhiêu phần trăm phụ nữ bị bạo lực tại Việt Nam không tìm kiếm sự hỗ trợ từ cơ quan nhà nước?",
        a: ["Khoảng 10%.", "Khoảng 50%.", "Gần 30%.", "Trên 90%."],
        c: 3,
    },
    {
        q: "Nguyên nhân gốc rễ và sâu xa nhất của bạo lực gia đình đối với phụ nữ là gì?",
        a: [
            "Do trình độ học vấn của người phụ nữ quá thấp so với người chồng.",
            "Do nạn nhân thường xuyên có những hành vi thách thức người gây bạo lực.",
            "Sự bất bình đẳng giới và các mối quan hệ quyền lực không cân bằng giữa nam và nữ.",
            "Do áp lực công việc của người đàn ông ngoài xã hội quá lớn.",
        ],
        c: 2,
    },
    {
        q: "Bạo lực gia đình gây thiệt hại kinh tế ước tính khoảng bao nhiêu phần trăm GDP của Việt Nam?",
        a: [
            "Không gây thiệt hại kinh tế vì đây là chuyện nội bộ gia đình.",
            "Khoảng 10%.",
            "Khoảng 1,8% đến 3%.",
            "Dưới 0,5%.",
        ],
        c: 2,
    },
    {
        q: "Theo quan điểm Mác-Lênin, sự nô dịch của đàn ông đối với phụ nữ bắt đầu xuất hiện gắn liền với yếu tố nào?",
        a: [
            "Sự khác biệt tự nhiên về sức mạnh thể chất giữa hai giới.",
            "Sự hình thành của các tôn giáo lớn trên thế giới.",
            "Sự ra đời của chế độ tư hữu về tư liệu sản xuất.",
            "Do phụ nữ không có khả năng tham gia vào các hoạt động săn bắn thời cổ đại.",
        ],
        c: 2,
    },
    {
        q: "Hành vi lăng mạ, cô lập nạn nhân khỏi các mối quan hệ xã hội được gọi là gì?",
        a: [
            "Bạo lực pháp lý.",
            "Bạo lực kinh tế.",
            "Bạo lực tinh thần.",
            "Bạo lực thể chất.",
        ],
        c: 2,
    },
    {
        q: "Trẻ em chứng kiến bạo lực gia đình thường gặp phải nguy cơ gì trong tương lai?",
        a: [
            "Có khả năng đạt thành tích học tập xuất sắc hơn để bù đắp nỗi đau.",
            "Sẽ trở nên mạnh mẽ và quyết đoán hơn trong việc bảo vệ gia đình mình.",
            "Dễ gặp rối loạn tâm lý và có xu hướng lặp lại hành vi bạo lực khi trưởng thành.",
            "Hoàn toàn không bị ảnh hưởng nếu không bị đánh trực tiếp.",
        ],
        c: 2,
    },
    {
        q: "Tại sao việc uống rượu bia hàng ngày lại làm gia tăng nguy cơ bạo lực gia đình?",
        a: [
            "Vì người vợ thường càu nhàu khi chồng uống rượu nên bị đánh là tất yếu.",
            "Vì rượu bia giúp người chồng giải tỏa áp lực và trở nên hiền lành hơn.",
            "Vì chất kích thích làm giảm khả năng kiểm soát hành vi và dễ dẫn đến xung đột.",
            "Vì rượu bia làm tăng sức mạnh cơ bắp của người đàn ông.",
        ],
        c: 2,
    },
    {
        q: "Trong bối cảnh đại dịch COVID-19, tình trạng bạo lực gia đình có xu hướng như thế nào?",
        a: [
            "Giảm đi vì thủ phạm sợ bị công an phát hiện khi đi ra ngoài.",
            "Gia tăng do giãn cách xã hội và áp lực kinh tế đè nặng.",
            "Không thay đổi vì bạo lực gia đình là vấn đề cố hữu không phụ thuộc dịch bệnh.",
            "Giảm đi vì các gia đình có nhiều thời gian để trò chuyện và thấu hiểu nhau.",
        ],
        c: 1,
    },
    {
        q: "Mục đích chính của việc thu thập dữ liệu về mức độ phổ biến của bạo lực gia đình là gì?",
        a: [
            "Để công khai danh tính và bêu xấu những gia đình có hành vi bạo lực.",
            "Để so sánh xem phụ nữ ở vùng nào hay cãi chồng nhất.",
            "Ước tính quy mô thực tế của vấn đề để xây dựng các chính sách phòng ngừa hiệu quả.",
            "Chỉ đơn thuần là để hoàn thành các báo cáo định kỳ cho Liên Hợp Quốc.",
        ],
        c: 2,
    },
    {
        q: "Một trong những giải pháp quan trọng để chấm dứt bạo lực gia đình là nâng cao quyền năng cho phụ nữ. Điều này có nghĩa là gì?",
        a: [
            "Cho phép phụ nữ được quyền đánh lại chồng khi bị bạo hành.",
            "Yêu cầu phụ nữ phải đảm đương hết mọi việc trong gia đình để chồng hài lòng.",
            "Giúp phụ nữ tự chủ về kinh tế và có kiến thức để tự bảo vệ quyền lợi của mình.",
            "Khuyên phụ nữ nên ly hôn ngay lập tức khi có mâu thuẫn nhỏ.",
        ],
        c: 2,
    },
    {
        q: 'Hình thức bạo lực gia đình nào sau đây thường bị nạn nhân coi là "chuyện riêng" và khó tố giác nhất?',
        a: [
            "Bạo lực tình dục trong hôn nhân.",
            "Bạo lực thể chất gây thương tích rõ rệt.",
            "Việc cấm đoán đi làm kiếm tiền.",
            "Hành vi đập phá đồ đạc trong nhà.",
        ],
        c: 0,
    },
    {
        q: 'Dịch vụ nào sau đây được coi là "thiết yếu" cho nạn nhân của bạo lực gia đình?',
        a: [
            "Dịch vụ hòa giải yêu cầu nạn nhân phải quay về chung sống để giữ gia đình.",
            "Dịch vụ cho vay tiền lấy lãi để nạn nhân trang trải viện phí.",
            "Dịch vụ y tế, hỗ trợ tư pháp và nhà tạm lánh an toàn.",
            "Cung cấp các khóa học dạy phụ nữ cách nhẫn nhịn chồng.",
        ],
        c: 2,
    },
    {
        q: 'Tư tưởng "Trọng nam khinh nữ" ảnh hưởng như thế nào đến bạo lực gia đình?',
        a: [
            "Khuyến khích đàn ông phải yêu thương và bảo vệ phụ nữ nhiều hơn.",
            "Hoàn toàn không liên quan vì bạo lực là do tính cách cá nhân.",
            "Tạo ra niềm tin rằng đàn ông có quyền dạy bảo và kiểm soát phụ nữ bằng bạo lực.",
            "Giúp các gia đình trở nên nề nếp và có trật tự hơn.",
        ],
        c: 2,
    },
    {
        q: 'Câu thành ngữ "Xấu chàng hổ ai" phản ánh thực trạng gì trong bạo lực gia đình tại Việt Nam?',
        a: [
            "Việc người chồng luôn lo lắng cho nhan sắc của vợ mình.",
            "Tâm lý cam chịu và che giấu bạo lực để bảo vệ danh dự gia đình.",
            "Sự tự hào của người vợ khi có người chồng mạnh mẽ.",
            "Sự đoàn kết tuyệt đối của các cặp vợ chồng trước khó khăn.",
        ],
        c: 1,
    },
    {
        q: "Dữ liệu hành chính về bạo lực gia đình thường thấp hơn dữ liệu khảo sát thực tế là vì sao?",
        a: [
            "Vì bạo lực gia đình hiện nay chủ yếu là bạo lực tinh thần không có hồ sơ.",
            "Vì chỉ những vụ việc cực kỳ nghiêm trọng mới được trình báo và ghi lại.",
            "Vì số lượng người bị bạo hành thực tế đang giảm mạnh.",
            "Vì các cán bộ thống kê thường làm mất hồ sơ báo cáo.",
        ],
        c: 1,
    },
    {
        q: "Hệ quả nào sau đây là gánh nặng cho hệ thống giáo dục quốc gia do bạo lực gia đình gây ra?",
        a: [
            "Việc phải xây dựng thêm quá nhiều trường học mới.",
            "Sự thiếu hụt trang thiết bị dạy học trong các lớp học.",
            "Sự gia tăng tỉ lệ trẻ em bỏ học và tội phạm vị thành niên.",
            "Các giáo viên phải dành thời gian đi giảng hòa cho phụ huynh.",
        ],
        c: 2,
    },
    {
        q: "Tại sao việc giải quyết bạo lực gia đình cần có sự tham gia của nam giới và trẻ em trai?",
        a: [
            "Để thay đổi các quan niệm tiêu cực về nam tính và xây dựng sự tôn trọng giới từ sớm.",
            "Vì nam giới là những người duy nhất có khả năng thực thi pháp luật.",
            "Vì nam giới thường có thu nhập cao hơn nên dễ đóng tiền phạt hơn.",
            "Để họ có thể trực tiếp giám sát hành động của phụ nữ trong nhà.",
        ],
        c: 0,
    }
];
