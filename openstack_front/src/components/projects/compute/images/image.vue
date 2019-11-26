<template>
  <div>
    <el-row type="flex" class="row-bg" justify="end">

      <el-col :span="5">
        <el-button-group>
          <el-button type="primary" size="medium">项目(2)</el-button>
          <el-button type="primary" size="medium">与我共享</el-button>
          <el-button type="primary" size="medium">公有(2)</el-button>
        </el-button-group>
      </el-col>

      <el-col :span="3">
        <el-button type="primary" size="medium" @click="createImagesDialogVisible = true">创建映像</el-button>

        <el-button type="danger" size="medium">删除映像</el-button>

      </el-col>

    </el-row>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      stripe="true"
      border="true"
      height="800"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="映像名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="disk_format"
        label="类型"
        width="200">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="200">
      </el-table-column>
      <el-table-column
        prop="visibility"
        label="公有"
        width="200">
      </el-table-column>
      <el-table-column
        prop="protected"
        label="受保护的"
        width="200">
      </el-table-column>
      <el-table-column
        prop="disk_format"
        label="格式"
        width="200">
      </el-table-column>
      <el-table-column
        prop="size"
        label="大小"
        width="200">
      </el-table-column>
      <el-table-column
        label="Actions"
      >
        <template slot-scope="scope">
          <el-dropdown split-button type="primary" @click="handleClick" size="small">
            启动
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>创建卷</el-dropdown-item>
              <el-dropdown-item @click.native="edit_image_dialog_open(scope.row)">编辑映像</el-dropdown-item>

              <el-dropdown-item>更新元数据</el-dropdown-item>
              <el-dropdown-item @click.native="images_delete_one(scope.row.id)"
                                v-loading.fullscreen.lock="fullscreenLoading" divided>删除映像
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>

    </el-table>

    <!--编辑映像弹窗-->
    <el-dialog title="编辑映像" :visible.sync="editImagesDialogVisible" width="500px">
      <el-form :model="form" label-width="100px" label-position="right">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="edit_image_form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="edit_image_form.description"></el-input>
        </el-form-item>
        <el-form-item label="内核标识" :label-width="formLabelWidth">
          <el-input v-model="edit_image_form.kernel_id" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="内存盘标识" :label-width="formLabelWidth">
          <el-input v-model="edit_image_form.ramdisk_id" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="架构" :label-width="formLabelWidth">
          <el-input v-model="edit_image_form.architecture" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="格式" :label-width="formLabelWidth">
          <el-select v-model="edit_image_form.format" placeholder="请选择映像格式">
            <el-option label="ISO-光盘映像" value="iso"></el-option>
            <el-option label="QCOW2-QEMU模拟器" value="qcow2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="最小磁盘(GB)" :label-width="formLabelWidth">
          <el-input v-model="edit_image_form.minimum_disk" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="最低内存(MB)" :label-width="formLabelWidth">
          <el-input v-model="edit_image_form.minimum_ram" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公有" style="margin-bottom: 0px">

          <el-checkbox name="type" v-model="edit_image_form.public"></el-checkbox>
        </el-form-item>
        <el-form-item label="受保护的" style="margin-bottom: 0px">

          <el-checkbox name="type" v-model="edit_image_form.protected"></el-checkbox>

        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="editImagesDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit_image_onsubmit">保 存</el-button>
      </div>
    </el-dialog>
    <!--创建映像弹窗-->
    <el-dialog title="编辑映像" :visible.sync="createImagesDialogVisible" width="500px">
      <el-form :model="create_image_form" label-width="100px" label-position="right" ref="create_image_form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="create_image_form.name" autocomplete="off" name="name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="create_image_form.description" name="description"></el-input>
        </el-form-item>
        <el-form-item label="映像源" :label-width="formLabelWidth">
          <el-select v-model="create_image_form.image_source">
            <el-option label="映像位置" value="shanghai"></el-option>
            <el-option label="映像文件" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="映像位置" :label-width="formLabelWidth">
          <el-input v-model="create_image_form.image_location" autocomplete="off" name="image_location"></el-input>
        </el-form-item>
        <el-form-item label="选择映像" :label-width="formLabelWidth">
          <el-upload
            action=""
            :http-request="handleFile"
            :multiple="false"
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击选择</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="格式" :label-width="formLabelWidth">
          <el-select v-model="create_image_form.format" placeholder="请选择映像格式" name="format">
            <el-option label="ISO-光盘映像" value="iso"></el-option>
            <el-option label="QCOW2-QEMU模拟器" value="qcow2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="架构" :label-width="formLabelWidth">
          <el-input v-model="create_image_form.architecture" autocomplete="off" name="architecture"></el-input>
        </el-form-item>
        <el-form-item label="最小磁盘(GB)" :label-width="formLabelWidth">
          <el-input v-model="create_image_form.minimum_disk" autocomplete="off" name="minimum_disk"></el-input>
        </el-form-item>
        <el-form-item label="最低内存(MB)" :label-width="formLabelWidth">
          <el-input v-model="create_image_form.minimum_ram" autocomplete="off" name="minimum_ram"></el-input>
        </el-form-item>
        <el-form-item label="复制数据" style="margin-bottom: 0px">

          <el-checkbox name="copy_data" v-model="create_image_form.copy_data"></el-checkbox>
        </el-form-item>
        <el-form-item label="公有" style="margin-bottom: 0px">

          <el-checkbox name="public" v-model="create_image_form.public"></el-checkbox>
        </el-form-item>
        <el-form-item label="受保护的" style="margin-bottom: 0px">

          <el-checkbox name="protected" v-model="create_image_form.protected"></el-checkbox>

        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="createImagesDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="create_image_onsubmit">创 建</el-button>
      </div>
    </el-dialog>


  </div>

</template>

<script>
  export default {
    name: 'image',
    components: {},
    data () {
      return {
        fullscreenLoading: false,
        multipleSelection: [],
        createImagesDialogVisible: false,
        editImagesDialogVisible: false,
        formLabelWidth: '100px',
        fileList: [],
        create_image_form: {
          name: '',
          description: '',
          image_source: '',
          image_location: '',
          format: '',
          architecture: '',
          minimum_disk: '',
          minimum_ram: '',
          copy_data: true,
          public: false,
          protected: false
        },
        edit_image_form: {
          name: '',
          description: '',
          kernel_id: '',
          ramdisk_id: '',
          architecture: '',
          format: '',
          minimum_disk: '',
          minimum_ram: '',
          public: false,
          protected: false

        },
        tableData: [{
          'name': 'cirros',
          'status': '活动',
          'size': '12.1 MB',
          'disk_format': 'qcow2',
          'protected': '否',
          'visibility': '是',
          'id': 12345678,
          'minimum_disk': '',
          'minimum_ram': '',
          'description': '',
          'architecture': ''

        }]

      }
    },

    created () {
      this.getData()
    },

    methods: {

      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      //获取映像列表数据
      async getData () {
        this.axios.get('api/getImageList')
          .then(response => {
            this.content = response.data
            this.tableData = this.content
            console.log(this.content)
            console.log(typeof (this.content))
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      /*映像操作函数*/
      //删除单个映像
      images_delete_one (id) {
        console.log(id)
        this.$confirm('此操作将删除该映像, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fullscreenLoading = true
          this.axios.get('api/images/delete_one?image_id=' + id)
            .then(response => {
              this.fullscreenLoading = false
              this.content = response.data
              // 判断登录
              if (this.content === 'not login in') {
                alert('请先登录！')
                this.$router.push('/Login')
              } else {
                if (this.content === 204) {
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  })
                  window.location.reload()
                } else {
                  this.$message({
                    type: 'error',
                    message: '删除失败!' + ' 返回信息：' + this.content
                  })
                }

              }

            })
            .catch(function (error) {
              console.log(error)

            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

      },

      //  创建映像 上传
      create_image_onsubmit () {
        let form = this.$refs['create_image_form'].$el
        let formData = new FormData()
        formData.append('name', this.create_image_form.name)
        formData.append('description', this.create_image_form.description)
        formData.append('image_location', this.create_image_form.image_location)
        formData.append('architecture', this.create_image_form.architecture)
        formData.append('format', this.create_image_form.format)
        formData.append('minimum_ram', this.create_image_form.minimum_ram)
        formData.append('minimum_disk', this.create_image_form.minimum_disk)
        formData.append('protected', this.create_image_form.protected)
        formData.append('public', this.create_image_form.public)
        formData.append('copy_data', this.create_image_form.copy_data)
        formData.append('files', this.fileList[0])
        console.log(this.fileList[0])

        this.axios.post('/api/images/create_image', formData)
          .then(response => {
            if (response.code === 200) {
              // 提交成功将要执行的代码
            }
          })
          .catch(function (error) {
            // console.log(error)
          })

      },
      edit_image_dialog_open (row) {
        var ispublic
        if (row.visibility === '是') {
          ispublic = true
        } else {
          ispublic = false
        }

        var isprotected
        if (row.protected === '是') {
          isprotected = true
        } else {
          isprotected = false
        }
        this.edit_image_form = {
          name: row.name,
          description: row.description,
          kernel_id: '',
          ramdisk_id: '',
          architecture: row.architecture,
          format: row.disk_format,
          minimum_disk: row.minimum_disk,
          minimum_ram: row.minimum_ram,
          public: ispublic,
          protected: isprotected
        }
        console.log(this.edit_image_form)

        this.editImagesDialogVisible = true

      },
      // 编辑映像 上传
      edit_image_onsubmit () {

      },
      /*toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleClick () {
        alert('button click')
      },
      handleFile (response) {
        this.fileList.push(response.file)
      },

      handleExceed (files, fileList) {
        this.$message.warning(`最多上传 ${files.length} 个文件`)
      },*/

    }

  }
</script>

<style scoped>
  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-input {
    display: block;

  }

  .el-select {
    display: block;
  }

  .el-dialog__body {
    text-align: left;

  }


</style>
