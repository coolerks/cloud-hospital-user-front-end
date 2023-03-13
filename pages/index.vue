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
                                <span :class="`item v-link clickable ${index === selected.area ? 'selected' : ''}`"
                                      @click="changeArea(item, index)"
                                      v-for="(item, index) in area">{{ item.name }}</span>

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
                                            {{ item.param.hostypeString }}
                                        </div>
                                        <div
                                            class="icon-wrapper"><span
                                            class="iconfont"></span>
                                            每天{{ item.bookingRule.releaseTime }}放号
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
                            <span
                                class="notice v-link clickable dark"> 中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告 </span>
                        </div>
                        <div class="notice-wrapper">
                            <div class="point"></div>
                            <span
                                class="notice v-link clickable dark"> 首都医科大学附属北京潞河医院老年医学科门诊停诊公告 </span>
                        </div>
                        <div class="notice-wrapper">
                            <div class="point"></div>
                            <span class="notice v-link clickable dark">中日友好医院中西医结合心内科门诊停诊公告 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            title="绑定手机号"
            :visible.sync="$route.query.key"
            width="30%">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-input :disabled="inputStatus" placeholder="手机号" v-model="phone"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :disabled="inputStatus" type="primary" @click="getVerifyCode">{{ verifyCodeTip }}
                    </el-button>
                </el-form-item>
            </el-form>
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-input placeholder="验证码" v-model="verifyCode"></el-input>
                </el-form-item>
                <!--                <el-form-item>-->
                <!--                    <el-button type="primary" @click="getVerifyCode">获取</el-button>-->
                <!--                </el-form-item>-->
            </el-form>
            <!--            <el-input :inline="true" placeholder="手机号" class="demo-form-inline" v-model="phone"></el-input>-->
            <!--            <el-input :inline="true" placeholder="验证码" class="demo-form-inline" v-model="verifyCode"></el-input>-->
            <span slot="footer" class="dialog-footer">
<!--                <el-button @click="dialogVisible = false">取 消</el-button>-->
                <el-button type="primary" @click="submitCode">提交</el-button>
             </span>
        </el-dialog>
        <!--      {{area}}-->
    </div>
</template>
<script>
import {getHospitalList} from "@/api/hospital";
import {getDictByParentId} from "@/api/dict";
import {getToken, bindPhone} from "@/api/wechat";
import {sendCode} from "@/api/sms";
import jsCookie from "js-cookie";

export default {
    async asyncData({params, error}) {
        let hospitalList = (await getHospitalList(1, 10, null)).data;
        return {
            hospitalList
        }
    },
    data() {

        return {
            search: {},
            page: 1,
            hospitalGrade: [],
            area: [],
            selected: {
                grade: 0,
                area: 0
            },
            bindPhone: true,
            verifyCode: '',
            phone: '',
            inputStatus: false,
            verifyCodeTip: '获取'

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
    async mounted() {
        let code = this.$route.query.code;
        if (code) {
            const loading = this.$loading({
                lock: true,
                text: '正在登录，请稍候...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            let token = await getToken(code);
            if (token.code === 301) {
                await this.$router.push("/?key=" + token.data.key);
            } else {
                jsCookie.set('token', token.data.token, {domain: 'localhost'})
                jsCookie.set('name', token.data.name, {domain: 'localhost'})
                await this.$router.push("/")
            }
        }
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
        },
        getVerifyCode() {
            sendCode(this.phone);
            this.inputStatus = true;
            let count = 10;
            let interval = setInterval(() => {
                this.verifyCodeTip = count--;
                if (count === 0) {
                    clearInterval(interval);
                    this.verifyCodeTip = "获取";
                    this.inputStatus = false;
                }
            }, 1000);
        },
        async submitCode() {
            let result = (await bindPhone({
                phone: this.phone,
                code: this.verifyCode,
                key: this.$route.query.key
            }));
            if (result.code === 200) {
                this.$message.success("绑定并登录成功");
                // console.log(result);
                jsCookie.set('token', result.data.token, {domain: 'localhost'})
                jsCookie.set('name', result.data.name, {domain: 'localhost'})
                await this.$router.push("/")
            }
        }
    }
}
</script>
