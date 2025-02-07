import "../../style/scss/style.scss";

export default function MainCampaignList() {
  return (
    <div className="main-campaign-list">
      <img
        className="main-campaign-list__img"
        src="https://via.placeholder.com/700x349"
        alt="Campaign"
      />
      <div className="main-campaign-list__overlay" />
      <div className="layout__main-campaign-list__content">
        <div>
          <div className="main-campaign-list__category">
            <div className="main-campaign-list__category-text">
              아동 / 청소년
            </div>
          </div>
          <div className="main-campaign-list__quote">
            “ 예비 초등학생에게 책가방을 보내주세요 ”
          </div>
          <div className="main-campaign-list__beneficiary">
            <div className="main-campaign-list__beneficiary-text">수혜자명</div>
          </div>
        </div>
        <div className="main-campaign-list__deadline">
          <div className="main-campaign-list__deadline-text">D-16</div>
        </div>
      </div>
      <div className="main-campaign-list__progress-wrapper">
        <div className="main-campaign-list__progress-percent">33%</div>
        <div className="main-campaign-list__amount">
          <span>1,920,999</span>
          <span>원</span>
        </div>
        <div className="main-campaign-list__progress-bar">
          <div className="main-campaign-list__progress-fill" />
        </div>
      </div>
    </div>
  );
}
