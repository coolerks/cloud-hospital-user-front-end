<template>
  <div class="home page-component">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 2" :key="item">
        <img src="~assets/images/web-banner1.png" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索 -->
<!--    <div class="search-container">-->
<!--      <div class="search-wrapper">-->
<!--        <div class="hospital-search">-->
<!--          <el-autocomplete-->
<!--            class="search-input"-->
<!--            prefix-icon="el-icon-search"-->
<!--            v-model="state"-->
<!--            :fetch-suggestions="querySearchAsync"-->
<!--            placeholder="点击输入医院名称"-->
<!--            @select="handleSelect"-->
<!--          >-->
<!--            <span slot="suffix" class="search-btn v-link highlight clickable selected">搜索 </span>-->
<!--          </el-autocomplete>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!-- bottom -->
    <div class="bottom">
      <div class="left">
        <div class="home-filter-wrapper">
          <div class="title"> 医院</div>
          <div>
            <div class="filter-wrapper">
        <span
          class="label">等级：</span>
              <div class="condition-wrapper">
                  <span :class="`item v-link clickable ${index === selected.grade ? 'selected' : ''}`"
                        @click="changeGrade(item, index)" v-for="(item, index) in hospitalGrade">{{ item.name }}</span>
<!--                  <span class="item v-link highlight clickable selected">全部 </span>-->
<!--                  <span class="item v-link clickable">-->
<!--                                                    三级医院 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                    二级医院 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                    一级医院 </span>-->
              </div>
            </div>
            <div class="filter-wrapper">
      <span
        class="label">地区：</span>
              <div class="condition-wrapper">
                  <span :class="`item v-link clickable ${index === selected.area ? 'selected' : ''}`" @click="changeArea(item, index)" v-for="(item, index) in area">{{item.name}}</span>

<!--                  <span-->
<!--                class="item v-link highlight clickable selected">-->
<!--                                                  全部 </span>-->
<!--                  <span class="item v-link clickable">东城区 </span>-->
<!--                  <span class="item v-link clickable">东城区 </span>-->
<!--                  <span-->
<!--                class="item v-link clickable">-->
<!--                                                  西城区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  朝阳区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  丰台区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  石景山区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  海淀区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  门头沟区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  房山区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  通州区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  顺义区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  昌平区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  大兴区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  怀柔区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  平谷区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  密云区 </span><span-->
<!--                class="item v-link clickable">-->
<!--                                                  延庆区 </span>-->
              </div>
            </div>
          </div>
        </div>
        <div class="v-scroll-list hospital-list">

          <div class="v-card clickable list-item"
               v-for="item in hospitalList.content"
               @click="$router.push('/hosp/' + item.hoscode)">
            <div class="">
              <div
                class="hospital-list-item hos-item" index="0">
                <div class="wrapper">
                  <div class="hospital-title"> {{ item.hosname }}
                  </div>
                  <div class="bottom-container">
                    <div
                      class="icon-wrapper"><span
                      class="iconfont"></span>
                      {{item.param.hostypeString}}
                    </div>
                    <div
                      class="icon-wrapper"><span
                      class="iconfont"></span>
                      每天{{item.bookingRule.releaseTime}}放号
                    </div>
                  </div>
                </div>
                <img
                  :src="`data:image/jpeg;base64,${item.logoData}`"
                  alt="北京协和医院" class="hospital-img"></div>
            </div>
          </div>
<!--          <div class="v-card clickable list-item space">-->
<!--            <div class="">-->
<!--              <div-->
<!--                class="hospital-list-item hos-item" index="0">-->
<!--                <div class="wrapper">-->
<!--                  <div class="hospital-title"> 北京协和医院-->
<!--                  </div>-->
<!--                  <div class="bottom-container">-->
<!--                    <div-->
<!--                      class="icon-wrapper"><span-->
<!--                      class="iconfont"></span>-->
<!--                      三级甲等-->
<!--                    </div>-->
<!--                    <div-->
<!--                      class="icon-wrapper"><span-->
<!--                      class="iconfont"></span>-->
<!--                      每天8:30放号-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <img-->
<!--                  src="images/23176337663806575.png"-->
<!--                  alt="北京协和医院" class="hospital-img"></div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="v-card clickable list-item">-->
<!--            <div class="">-->
<!--              <div class="hospital-list-item hos-item" index="0">-->
<!--                <div class="wrapper">-->
<!--                  <div class="hospital-title"> 北京协和医院-->
<!--                  </div>-->
<!--                  <div class="bottom-container">-->
<!--                    <div-->
<!--                      class="icon-wrapper"><span-->
<!--                      class="iconfont"></span>-->
<!--                      三级甲等-->
<!--                    </div>-->
<!--                    <div-->
<!--                      class="icon-wrapper"><span-->
<!--                      class="iconfont"></span>-->
<!--                      每天8:30放号-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <img-->
<!--                  src="images/23176337663806575.png"-->
<!--                  alt="北京协和医院" class="hospital-img"></div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
      <div class="right">
        <div class="common-dept">
          <div class="header-wrapper">
            <div class="title"> 常见科室</div>
            <div class="all-wrapper"><span>全部</span>
              <span class="iconfont icon"></span>
            </div>
          </div>
          <div class="content-wrapper">
            <span class="item v-link clickable dark">神经内科 </span>
            <span class="item v-link clickable dark">消化内科 </span>
            <span class="item v-link clickable dark">呼吸内科 </span>
            <span class="item v-link clickable dark">内科 </span>
            <span class="item v-link clickable dark">神经外科 </span>
            <span class="item v-link clickable dark">妇科 </span>
            <span class="item v-link clickable dark"> 产科 </span>
            <span class="item v-link clickable dark">儿科 </span>
          </div>
        </div>
        <div class="space">
          <div class="header-wrapper">
            <div class="title-wrapper">
              <div class="icon-wrapper"><span
                class="iconfont title-icon"></span>
              </div>
              <span class="title">平台公告</span>
            </div>
            <div class="all-wrapper">
              <span>全部</span>
              <span class="iconfont icon"></span>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark">关于延长北京大学国际医院放假的通知 </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark">北京中医药大学东方医院部分科室医生门诊医 </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark"> 武警总医院号源暂停更新通知 </span>
            </div>
          </div>
        </div>
        <div class="suspend-notice-list space">
          <div class="header-wrapper">
            <div class="title-wrapper">
              <div class="icon-wrapper">
                <span class="iconfont title-icon"></span>
              </div>
              <span class="title">停诊公告</span>
            </div>
            <div class="all-wrapper">
              <span>全部</span>
              <span class="iconfont icon"></span>
            </div>
          </div>
          <div class="content-wrapper">
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark"> 中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告 </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark"> 首都医科大学附属北京潞河医院老年医学科门诊停诊公告 </span>
            </div>
            <div class="notice-wrapper">
              <div class="point"></div>
              <span class="notice v-link clickable dark">中日友好医院中西医结合心内科门诊停诊公告 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--      {{area}}-->
  </div>
</template>
<script>
import {getHospitalList} from "@/api/hospital";
import {getDictByParentId} from "@/api/dict";
export default {
    async asyncData({params, error}) {
        let hospitalList = (await getHospitalList(1, 10, null)).data;
        return {
            hospitalList
        }
    },
    data() {

        return {
            search: {

            },
            page: 1,
            hospitalGrade: [],
            area: [],
            selected: {
                grade: 0,
                area: 0
            },

        }

    },
    async created() {
        const all = {
            id: '0',
            name: '全部'
        };
        this.hospitalGrade = (await getDictByParentId(10000)).data;
        this.area = (await getDictByParentId(110100)).data;
        this.hospitalGrade.unshift(all)
        this.area.unshift(all);
    },
    methods: {
        changeGrade(item, index) {
            this.selected.grade = index;
            this.freshHospitalList();
        },
        changeArea(item, index) {
            this.selected.area = index;
            this.freshHospitalList();
        },
        async freshHospitalList() {
            this.hospitalList = (await getHospitalList(1, 10, {
                hostype: this.selected.grade !== 0 ? this.hospitalGrade[this.selected.grade].value : null,
                districtCode: this.selected.area !== 0 ? this.area[this.selected.area].value : null
            })).data;
        },
        async querySearchAsync(content, cb) {
            if (content === null || content === '') {
                return;
            }
        }
    }
}
</script>
